import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'

export class ValidLanguage extends ValidNotEmptyString {
  constructor(val: unknown, name: string = 'Language', supportedLanguages: string[]) {
    super(val, name)
    if (!supportedLanguages.includes(this.getString())) {
      throw new Error(`Attribute ${name} is not valid language: '${this.getString()}'.`)
    }
  }
}
