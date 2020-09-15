// tslint:disable-next-line:prefer-type-cast
const createEnumGuard = <T>(e: T) => (val: unknown): val is T[keyof T] => Object.values(e).includes(val as T[keyof T])

export class ValidOneOfEnum<T> {
  private readonly val: T[keyof T]

  constructor(val: unknown, name: string = 'OneOfEnum', possibleValues: T) {
    const isOneOfEnum = createEnumGuard(possibleValues)

    if (!isOneOfEnum(val)) {
      throw new Error(`Attribute ${name} is not one of enum.`)
    }

    this.val = val
  }

  public getValue(): T[keyof T] {
    return this.val
  }
}
