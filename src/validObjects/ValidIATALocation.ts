import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'

const inputRegexp = new RegExp(/^[A-Z]{3}$/)
const inputRegexpWithPlus = new RegExp(/^[A-Z]{3}\+?$/)

export class ValidIATALocation extends ValidNotEmptyString {
  constructor(val: unknown, name: string = 'IATALocation', allowPlus: boolean = false) {
    super(val, name)
    if (!allowPlus && !inputRegexp.test(this.getString())) {
      throw new Error(`Attribute ${name} is not valid IATALocation: '${this.getString()}'.`)
    }

    if (allowPlus && !inputRegexpWithPlus.test(this.getString())) {
      throw new Error(`Attribute ${name} is not valid IATALocation: '${this.getString()}'.`)
    }
  }

  public toStringWithoutPlus(): string {
    return this.getString().substring(0, 3)
  }
}
