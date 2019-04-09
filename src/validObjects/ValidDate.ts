import { InvalidDateError } from '@/errors/InvalidDateError'
import * as moment from 'moment'

const dateRegexp = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/
export const formatSystemDate = 'YYYY-MM-DD'

// tslint:disable-next-line:no-any
const validate = (val: any): string => {
  if (typeof val !== 'string') {
    throw new InvalidDateError(JSON.stringify(val))
  }
  if (!val) {
    throw new InvalidDateError(val)
  }

  return val
}

const convertToMoment = (val: string): moment.Moment => {
  const result = val.match(dateRegexp)
  if (!result) {
    throw new InvalidDateError(val)
  }
  const momentVal = moment(val, formatSystemDate)
  if (!momentVal.isValid()) {
    throw new InvalidDateError(val)
  }

  return momentVal
}

export class ValidDate {
  private readonly val: string

  // tslint:disable-next-line:no-any
  constructor(val: any) {
    this.val = validate(val)
    convertToMoment(this.val)
  }

  get value(): string {
    return this.val
  }

  get moment(): moment.Moment {
    return convertToMoment(this.val)
  }

  public readonly isBefore = (date: ValidDate): boolean => {
    return this.moment.isBefore(date.value)
  }

  public readonly isAfter = (date: ValidDate): boolean => {
    return this.moment.isAfter(date.value)
  }

  public readonly isSame = (date: ValidDate): boolean => {
    return this.moment.isSame(date.value)
  }

  public readonly formatToSystem = (): string => {
    return this.moment.format(formatSystemDate)
  }

  public readonly formatToLocal = (format: string): string => {
    return this.moment.format(format)
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
