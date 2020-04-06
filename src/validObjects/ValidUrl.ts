import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'
import { isWebUri } from 'valid-url'

export class ValidUrl extends ValidNotEmptyString {
  // tslint:disable-next-line:no-any
  constructor(val: unknown, name: string = 'Url') {
    super(val, name)
    if (!isWebUri(this.getString())) {
      throw new Error(`Attribute ${name} is not valid url: '${this.getString()}'.`)
    }
  }
}
