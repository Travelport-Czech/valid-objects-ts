import { InvalidIATALocationError } from '@/errors/InvalidIATALocationError'
import { ValidObjectError } from '@/errors/ValidObjectError'
import { ValidString } from '@/validObjects/ValidString'

const inputRegexp = new RegExp(/^[A-Z]{3}$/)

const validate = (val: string): void => {
  if (!inputRegexp.test(val)) {
    throw new InvalidIATALocationError(val)
  }
}

export class ValidIATALocation extends ValidString {
  // tslint:disable-next-line:no-any
  constructor(val: any) {
    try {
      super(val)
    } catch (err) {
      if (!(err instanceof ValidObjectError)) {
        throw err
      }
      throw new InvalidIATALocationError(err.message)
    }
    validate(this.value)
  }
}
