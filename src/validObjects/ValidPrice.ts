import { InvalidPriceError } from '@/errors/InvalidPriceError'
import { PriceOperationWithDifferentCurrencyError } from '@/errors/PriceOperationWithDifferentCurrencyError'
import { ValidObjectError } from '@/errors/ValidObjectError'
import { ValidNumber } from '@/validObjects/ValidNumber'
import { ValidString } from '@/validObjects/ValidString'
import * as formatter from 'number-format.js'
import * as numeral from 'numeral'

const inputRegexp = new RegExp(/^(.)*\s([A-Z]{3})$/)

const validate = (val: string): void => {
  if (!inputRegexp.test(val)) {
    throw new ValidObjectError(val)
  }
}

export class ValidPrice extends ValidString {
  private readonly amm: ValidNumber
  private readonly curr: ValidString

  /**
   * Value must contain:
   * 1. number (can be formatted with currency symbol)
   * 2. space
   * 3. currency code (three chars)
   *
   * Decimal numbers are not supported
   */
  constructor(val: unknown) {
    try {
      super(val)
      validate(this.value)

      this.amm = new ValidNumber(numeral(this.value).value())
      this.curr = new ValidString(this.value.slice(-3))
    } catch (err) {
      if (!(err instanceof ValidObjectError)) {
        throw err
      }
      throw new InvalidPriceError(err.message)
    }
  }

  get currency(): string {
    return this.curr.toString()
  }

  get amount(): number {
    return this.amm.value
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
      throw new PriceOperationWithDifferentCurrencyError(this.toString(), price.toString())
    }
  }
}
