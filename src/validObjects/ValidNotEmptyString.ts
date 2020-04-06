import { InvalidStringError } from '@/errors/InvalidStringError'
import { ValidString } from '@/validObjects/ValidString'

export class ValidNotEmptyString extends ValidString {
  constructor(val: unknown) {
    super(val)
    if (!val) {
      throw new InvalidStringError(`String can not be empty.`)
    }
  }
}
