import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'

const inputRegexp = new RegExp(/^[A-Z]{3}$/)

export class ValidIATALocation extends ValidNotEmptyString {
  constructor(val: unknown, name: string = 'IATALocation') {
    super(val, name)
    if (!inputRegexp.test(this.getString())) {
      throw new Error(`Attribute ${name} is not valid IATALocation: '${this.getString()}'.`)
    }
  }
}
