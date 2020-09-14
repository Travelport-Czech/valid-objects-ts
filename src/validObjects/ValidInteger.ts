import { ValidNumber } from '@/validObjects/ValidNumber'

export class ValidInteger extends ValidNumber {
  constructor(val: unknown, name: string = 'Integer', rangeFromInclusive?: number, rangeToInclusive?: number) {
    super(val, name, rangeFromInclusive, rangeToInclusive)

    if (val !== parseInt(this.getNumber().toString(), 10)) {
      throw new Error(`Attribute ${name} is not integer: '${val}'.`)
    }
  }
}
