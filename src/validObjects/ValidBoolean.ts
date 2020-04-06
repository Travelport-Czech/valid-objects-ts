export class ValidBoolean {
  private readonly val: boolean

  constructor(val: unknown, name: string = 'Boolean') {
    if (typeof val !== 'boolean') {
      throw new Error(`Attribute ${name} is not valid Boolean.`)
    }

    this.val = val
  }

  public getBoolean(): boolean {
    return this.val
  }

  public toString() {
    return this.val.toString()
  }

  get [Symbol.toStringTag]() {
    return this.toString()
  }

  public toJSON() {
    return this.toString()
  }
}
