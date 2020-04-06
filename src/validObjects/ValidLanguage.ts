import { InvalidLanguageError } from '@/errors/InvalidLanguageError'
import { ValidObjectError } from '@/errors/ValidObjectError'
import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'

const validate = (lang: string, supportedLanguages: string[]): void => {
  if (!supportedLanguages.includes(lang)) {
    throw new InvalidLanguageError(lang)
  }
}

export class ValidLanguage extends ValidNotEmptyString {
  // tslint:disable-next-line:no-any
  constructor(val: any, supportedLanguages: string[]) {
    try {
      super(val)
    } catch (err) {
      if (!(err instanceof ValidObjectError)) {
        throw err
      }
      throw new InvalidLanguageError(err.message)
    }
    validate(this.value, supportedLanguages)
  }
}
