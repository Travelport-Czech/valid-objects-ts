import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'
import { ValidNumber } from '@/validObjects/ValidNumber'
import * as formatter from 'number-format.js'
import * as numeral from 'numeral'

const inputRegexp = new RegExp(/^(.)*\s([a-zA-Zá-ŽÁ-Ž]{2,3})$/)

export class ValidPrice extends ValidNotEmptyString {
  private readonly amm: ValidNumber
  private readonly curr: ValidNotEmptyString

  /**
   * Value must contain:
   * 1. number (can be formatted with currency symbol)
   * 2. space
   * 3. currency code (two or three chars)
   *
   * Decimal numbers are not supported
   */
  constructor(val: unknown, name: string = 'Price') {
    super(val, name)
    if (!inputRegexp.test(this.getString())) {
      throw new Error(`Attribute ${name} is not valid price: '${this.getString()}'.`)
    }

    const splited = this.getString().split(' ')

    this.curr = new ValidNotEmptyString(splited[splited.length - 1])
    this.amm = new ValidNumber(
      numeral(this.getString().substring(0, this.getString().length - this.curr.getString().length)).value(),
      name
    )
  }

  get currency(): string {
    return this.curr.toString()
  }

  get amount(): number {
    return this.amm.getNumber()
  }

  public subtract(price: ValidPrice): ValidPrice {
    this.checkCurrency(price)
    const amount = this.amount - price.amount

    return new ValidPrice(amount.toString() + ' ' + this.currency)
  }

  public isSame(price: ValidPrice): boolean {
    this.checkCurrency(price)

    return super.isSame(price)
  }

  public isHigherThan(price: ValidPrice): boolean {
    this.checkCurrency(price)

    return this.amount > price.amount
  }

  public diffPercent(lowerPrice: ValidPrice): number {
    this.checkCurrency(lowerPrice)
    const diff = this.amount - lowerPrice.amount

    return Math.round((diff / this.amount) * 100)
  }

  /**
   * use number format from number-format.js (https://github.com/Mottie/javascript-number-formatter)
   * for currency use symbol ¤
   *
   * example:
   * CZ: # ##0,## ¤
   * UK: ¤#,##0.00
   */
  public formatToLocale(format: string) {
    return formatter(format.replace('¤', this.currency), this.amount)
  }

  public toString() {
    return formatter('0.', this.amount) + ' ' + this.currency
  }

  private checkCurrency(price: ValidPrice): void {
    if (this.currency !== price.currency) {
      throw new Error(`Price operation with different currency '${this.toString()}' and ${price.toString()}.`)
    }
  }
}
