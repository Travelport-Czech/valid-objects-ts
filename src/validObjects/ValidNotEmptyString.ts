import { ValidString } from '@/validObjects/ValidString'

export class ValidNotEmptyString extends ValidString {
  constructor(val: unknown, name: string = 'NotEmptyString') {
    super(val, name)
    if (!this.getString()) {
      throw new Error(`Attribute ${name} can not be empty.`)
    }
  }
}
