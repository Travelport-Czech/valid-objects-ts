import { InvalidBooleanError } from '@/errors/InvalidBooleanError'

const validate = (val: unknown): boolean => {
  if (typeof val !== 'boolean') {
    throw new InvalidBooleanError(JSON.stringify(val) + ' is type ' + typeof val)
  }

  return val
}

export class ValidBoolean {
  private readonly val: boolean

  constructor(val: unknown) {
    this.val = validate(val)
  }

  get value(): boolean {
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
