import { InvalidEmailError } from '@/errors/InvalidEmailError'
import { ValidObjectError } from '@/errors/ValidObjectError'
import { ValidString } from '@/validObjects/ValidString'
import { validate } from 'email-validator'

export const validateEmail = (email: string | undefined): boolean => {
  if (!email) {
    return false
  }

  if (!validate(email)) {
    return false
  }

  return true
}

export class ValidEmail extends ValidString {
  // tslint:disable-next-line:no-any
  constructor(val: any) {
    try {
      super(val)
    } catch (err) {
      if (!(err instanceof ValidObjectError)) {
        throw err
      }
      throw new InvalidEmailError(err.message)
    }

    if (!validateEmail(this.value)) {
      throw new InvalidEmailError(this.value)
    }
  }
}
