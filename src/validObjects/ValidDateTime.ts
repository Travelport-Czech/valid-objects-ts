import { dateTimeRegexp, formatSystemDateTime } from '@/validObjects/consts'
import { ValidDate } from '@/validObjects/ValidDate'
import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'
import * as dayjs from 'dayjs'

const validate = (val: string, name: string): dayjs.Dayjs => {
  const result = val.match(dateTimeRegexp)
  if (!result) {
    throw new Error(`Attribute ${name} is not valid DateTime: '${val}'.`)
  }
  const dateTime = dayjs(val, formatSystemDateTime)
  if (!dateTime.isValid()) {
    throw new Error(`Attribute ${name} is not valid DateTime: '${val}'.`)
  }

  return dateTime
}

export class ValidDateTime extends ValidNotEmptyString {
  private readonly dateTime: dayjs.Dayjs

  constructor(val: unknown, name: string = 'DateTime') {
    super(val, name)
    this.dateTime = validate(this.getString(), name)
  }

  public getDayjs(): dayjs.Dayjs {
    return this.dateTime
  }

  public readonly formatToSystem = (): string => {
    return this.dateTime.format(formatSystemDateTime)
  }

  public readonly formatToLocal = (format: string): string => {
    return this.dateTime.format(format)
  }

  public readonly getValidDate = (): ValidDate => {
    return new ValidDate(this.formatToSystem().substring(0, 10))
  }

  public toString() {
    return this.formatToSystem()
  }

  get [Symbol.toStringTag]() {
    return this.toString()
  }

  public toJSON() {
    return this.toString()
  }
}
