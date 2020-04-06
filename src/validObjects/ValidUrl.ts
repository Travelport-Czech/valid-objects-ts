import { InvalidUrlError } from '@/errors/InvalidUrlError'
import { ValidObjectError } from '@/errors/ValidObjectError'
import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'
import { isWebUri } from 'valid-url'

const validate = (val: string): string => {
  if (!isWebUri(val)) {
    throw new InvalidUrlError(val)
  }

  return val
}

export class ValidUrl extends ValidNotEmptyString {
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
