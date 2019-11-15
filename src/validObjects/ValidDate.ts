import { InvalidDateError } from '@/errors/InvalidDateError'
import * as dayjs from 'dayjs'
import { dateRegexps, formatSystemDate } from './consts'

const validate = (val: unknown, format: 'YYYY-MM-DD' | 'YYYYMMDD'): dayjs.Dayjs => {
  if (typeof val !== 'string') {
    throw new InvalidDateError(JSON.stringify(val))
  }
  if (!val) {
    throw new InvalidDateError(val)
  }
  const result = val.match(dateRegexps[format])
  if (!result) {
    throw new InvalidDateError(val)
  }

  const date = dayjs(val, formatSystemDate)
  if (!date.isValid()) {
    throw new InvalidDateError(val)
  }

  return date
}

export class ValidDate {
  private readonly val: dayjs.Dayjs

  // tslint:disable-next-line:no-any
  constructor(val: unknown, format: 'YYYY-MM-DD' | 'YYYYMMDD' = formatSystemDate) {
    this.val = validate(val, format)
  }

  get value(): dayjs.Dayjs {
    return this.val
  }

  public readonly isBefore = (date: ValidDate): boolean => {
    return this.val.isBefore(date.value)
  }

  public readonly isAfter = (date: ValidDate): boolean => {
    return this.val.isAfter(date.value)
  }

  public readonly isSame = (date: ValidDate): boolean => {
    return this.val.isSame(date.value)
  }

  public readonly subtractDays = (days: number): ValidDate => {
    return new ValidDate(this.val.subtract(days, 'day').format(formatSystemDate))
  }

  public readonly addDays = (days: number): ValidDate => {
    return new ValidDate(this.val.add(days, 'day').format(formatSystemDate))
  }

  public readonly diffInDays = (date: ValidDate): number => {
    return this.val.diff(date.value, 'day')
  }

  public readonly formatToSystem = (): string => {
    return this.val.format(formatSystemDate)
  }

  public readonly formatToLocal = (format: string): string => {
    return this.val.format(format)
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
