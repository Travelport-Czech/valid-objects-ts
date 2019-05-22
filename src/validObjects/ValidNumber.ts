import { InvalidNumberError } from '@/errors/InvalidNumberError'
import { ValidObjectLogicError } from '@/errors/ValidObjectLogicError'

// tslint:disable-next-line:no-any
const validate = (val: any): number => {
  if (typeof val !== 'number') {
    throw new InvalidNumberError(typeof val === 'string' ? val.toString() : '')
  }
  if (val !== parseInt(val.toString(), 10)) {
    throw new InvalidNumberError(val.toString())
  }

  return val
}

export class ValidNumber {
  private readonly val: number

  // tslint:disable-next-line:no-any
  constructor(val: any, rangeFromInclusive?: number, rangeToInclusive?: number) {
    if (rangeFromInclusive !== undefined && rangeToInclusive !== undefined && rangeFromInclusive > rangeToInclusive) {
      throw new ValidObjectLogicError(`Parameter rangeFromInclusive (${rangeFromInclusive}) can not be bigger then rangeToInclusive (${rangeToInclusive})`)
    }
    this.val = validate(val)
    if (rangeFromInclusive && this.value < rangeFromInclusive) {
      throw new InvalidNumberError(`Number (${this.value}) can not be smaller than ${rangeFromInclusive}`)
    }
    if (rangeToInclusive && this.value > rangeToInclusive) {
      throw new InvalidNumberError(`Number (${this.value}) can not be bigger than ${rangeToInclusive}`)
    }
  }

  get value(): number {
    return this.val
  }

  public toString() {
    return this.val.toString()
  }

  get [Symbol.toStringTag]() {
    return this.toString()
  }

  public toJSON() {
    return this.val
  }
}
