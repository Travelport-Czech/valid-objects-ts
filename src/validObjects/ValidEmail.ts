import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'
import { validate } from 'email-validator'

export const validateEmail = (email: string | undefined, excludeChars?: string[]): boolean => {
  if (!email) {
    return false
  }

  if (!validate(email)) {
    return false
  }

  const foundChar =
    excludeChars &&
    excludeChars.reduce((accumulator: boolean, currentValue: string): boolean => {
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

export class ValidEmail extends ValidNotEmptyString {
  constructor(val: unknown, name: string = 'Email', excludeChars?: string[]) {
    super(val, name)

    if (!validateEmail(this.getString(), excludeChars)) {
      throw new Error(`Attribute ${name} is not valid Email: '${this.getString()}'.`)
    }
  }
}
