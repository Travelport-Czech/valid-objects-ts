import { dateRegexps, formatSystemDate } from '@/validObjects/consts'
import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'
import * as dayjs from 'dayjs'

const validate = (val: string, name: string, format: 'YYYY-MM-DD' | 'YYYYMMDD'): dayjs.Dayjs => {
  const result = val.match(dateRegexps[format])
  if (!result) {
    throw new Error(`Attribute ${name} is not valid Date: '${val}'.`)
  }

  const date = dayjs(val, formatSystemDate)
  if (!date.isValid()) {
    throw new Error(`Attribute ${name} is not valid Date: '${val}'.`)
  }

  return date
}

export class ValidDate extends ValidNotEmptyString {
  private readonly date: dayjs.Dayjs

  constructor(val: unknown, name: string = 'Date', format: 'YYYY-MM-DD' | 'YYYYMMDD' = formatSystemDate) {
    super(val, name)
    this.date = validate(this.getString(), name, format)
  }

  public getDayjs(): dayjs.Dayjs {
    return this.date
  }

  public readonly isBefore = (date: ValidDate): boolean => {
    return this.date.isBefore(date.getDayjs())
  }

  public readonly isAfter = (date: ValidDate): boolean => {
    return this.date.isAfter(date.getDayjs())
  }

  public readonly isSame = (date: ValidDate): boolean => {
    return this.date.isSame(date.getDayjs())
  }

  public readonly subtractDays = (days: number): ValidDate => {
    return new ValidDate(this.date.subtract(days, 'day').format(formatSystemDate))
  }

  public readonly addDays = (days: number): ValidDate => {
    return new ValidDate(this.date.add(days, 'day').format(formatSystemDate))
  }

  public readonly diffInDays = (date: ValidDate): number => {
    return this.date.diff(date.getDayjs(), 'day')
  }

  public readonly formatToSystem = (): string => {
    return this.date.format(formatSystemDate)
  }

  public readonly formatToLocal = (format: string): string => {
    return this.date.format(format)
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
