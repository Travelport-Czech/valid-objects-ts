const validate = (val: unknown, name: string): number => {
  if (typeof val !== 'number') {
    throw new Error(`Attribute ${name} is not number.`)
  }
  if (val !== parseInt(val.toString(), 10)) {
    throw new Error(`Attribute ${name} is not number: '${val}'.`)
  }

  return val
}

export class ValidNumber {
  private readonly val: number

  // tslint:disable-next-line:no-any
  constructor(val: unknown, name: string = 'Number', rangeFromInclusive?: number, rangeToInclusive?: number) {
    if (rangeFromInclusive !== undefined && rangeToInclusive !== undefined && rangeFromInclusive > rangeToInclusive) {
      throw new Error(
        `Attribute ${name} rangeFromInclusive (${rangeFromInclusive}) can not be bigger then rangeToInclusive (${rangeToInclusive}).`
      )
    }
    this.val = validate(val, name)
    if (rangeFromInclusive && this.getNumber() < rangeFromInclusive) {
      throw new Error(`Attribute ${name} can not be smaller than ${rangeFromInclusive}: ${this.getNumber()}.`)
    }
    if (rangeToInclusive && this.getNumber() > rangeToInclusive) {
      throw new Error(`Attribute ${name} can not be bigger than ${rangeToInclusive}: ${this.getNumber()}.`)
    }
  }

  public getNumber(): number {
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
