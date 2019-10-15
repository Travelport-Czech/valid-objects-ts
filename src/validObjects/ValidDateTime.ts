import { InvalidDateTimeError } from '@/errors/InvalidDateTimeError'
import { ValidDate } from '@/validObjects/ValidDate'
import * as dayjs from 'dayjs'

const dateRegexp = /^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/
export const formatSystemDateTime = 'YYYY-MM-DD HH:mm:ss'

const validate = (val: unknown): dayjs.Dayjs => {
  if (typeof val !== 'string') {
    throw new InvalidDateTimeError(JSON.stringify(val))
  }
  if (!val) {
    throw new InvalidDateTimeError(val)
  }

  const result = val.match(dateRegexp)
  if (!result) {
    throw new InvalidDateTimeError(val)
  }
  const dateTime = dayjs(val, formatSystemDateTime)
  if (!dateTime.isValid()) {
    throw new InvalidDateTimeError(val)
  }

  return dateTime
}

export class ValidDateTime {
  private readonly val: dayjs.Dayjs

  constructor(val: unknown) {
    this.val = validate(val)
  }

  get value(): dayjs.Dayjs {
    return this.val
  }

  public readonly formatToSystem = (): string => {
    return this.val.format(formatSystemDateTime)
  }

  public readonly formatToLocal = (format: string): string => {
    return this.val.format(format)
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
