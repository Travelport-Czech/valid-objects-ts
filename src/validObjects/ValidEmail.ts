import { InvalidEmailError } from '@/errors/InvalidEmailError'
import { ValidObjectError } from '@/errors/ValidObjectError'
import { ValidString } from '@/validObjects/ValidString'
import { validate } from 'email-validator'

export const validateEmail = (email: string | undefined, excludeChars: string[]): boolean => {
  if (!email) {
    return false
  }

  if (!validate(email)) {
    return false
  }

  const foundChar = excludeChars.reduce((accumulator: boolean, currentValue: string): boolean => {
    if (accumulator) {
      return true
    }
    if (email.includes(currentValue)) {
      return true
    }
    return false
  }, false)

  if (foundChar) {
    return false
  }

  return true
}

export class ValidEmail extends ValidString {
  // tslint:disable-next-line:no-any
  constructor(val: any, excludeChars: string[]) {
    try {
      super(val)
    } catch (err) {
      if (!(err instanceof ValidObjectError)) {
        throw err
      }
      throw new InvalidEmailError(err.message)
    }

    if (!validateEmail(this.value, excludeChars)) {
      throw new InvalidEmailError(this.value)
    }
  }
}
