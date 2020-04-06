export class ValidString {
  private readonly val: string

  constructor(val: unknown, name: string = 'String') {
    if (typeof val !== 'string') {
      throw new Error(`Attribute ${name} is not string.`)
    }

    this.val = val
  }

  public getString(): string {
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
