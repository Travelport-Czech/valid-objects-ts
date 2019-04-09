import { InvalidUrlError } from '@/errors/InvalidUrlError'
import { ValidObjectError } from '@/errors/ValidObjectError'
import { ValidString } from '@/validObjects/ValidString'
import { isWebUri } from 'valid-url'

const validate = (val: string): string => {
  if (!isWebUri(val)) {
    throw new InvalidUrlError(val)
  }

  return val
}

export class ValidUrl extends ValidString {
  // tslint:disable-next-line:no-any
  constructor(val: any) {
    try {
      super(val)
    } catch (err) {
      if (!(err instanceof ValidObjectError)) {
        throw err
      }
      throw new InvalidUrlError(err.message)
    }
    validate(this.value)
  }
}
