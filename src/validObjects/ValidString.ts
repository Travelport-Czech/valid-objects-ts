import { InvalidStringError } from '@/errors/InvalidStringError'

export class ValidString {
  private readonly val: string

  constructor(val: unknown) {
    if (typeof val !== 'string') {
      throw new InvalidStringError(JSON.stringify(val) + ' is type ' + typeof val)
    }

    this.val = val
  }

  get value(): string {
    return this.val
  }

  public isSame(second: ValidString): boolean {
    return this.toString() === second.toString()
  }

  public isNotSame(second: ValidString): boolean {
    return !this.isSame(second)
  }

  public toString() {
    return this.val
  }

  get [Symbol.toStringTag]() {
    return this.toString()
  }

  public toJSON() {
    return this.toString()
  }
}
