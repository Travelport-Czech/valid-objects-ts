import { ValidBoolean } from '@/validObjects/ValidBoolean'
import { ValidDate } from '@/validObjects/ValidDate'
import { ValidDateTime } from '@/validObjects/ValidDateTime'
import { ValidEmail } from '@/validObjects/ValidEmail'
import { ValidIATALocation } from '@/validObjects/ValidIATALocation'
import { ValidIATALocationList } from '@/validObjects/ValidIATALocationList'
import { ValidInteger } from '@/validObjects/ValidInteger'
import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'
import { ValidNumber } from '@/validObjects/ValidNumber'
import { ValidOneOfEnum } from '@/validObjects/ValidOneOfEnum'
import { ValidPrice } from '@/validObjects/ValidPrice'
import { ValidString } from '@/validObjects/ValidString'
import { ValidUrl } from '@/validObjects/ValidUrl'

export const createBooleanFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): boolean => {
  const o = {
    name: 'UnknownBoolean',
    ...options
  }

  return new ValidBoolean(val, o.name).getBoolean()
}

export const createDateFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): ValidDate => {
  const o = {
    name: 'UnknownDate',
    ...options
  }

  return new ValidDate(val, o.name)
}

export const createDateTimeFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): ValidDateTime => {
  const o = {
    name: 'UnknownDateTime',
    ...options
  }

  return new ValidDateTime(val, o.name)
}

export const createNotEmptyStringFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): ValidNotEmptyString => {
  const o = {
    name: 'UnknownNotEmptyString',
    ...options
  }

  return new ValidNotEmptyString(val, o.name)
}

export const createStringFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): string => {
  const o = {
    name: 'UnknownString',
    ...options
  }

  return new ValidString(val, o.name).toString()
}

export const createNumberFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
    readonly rangeFromInclusive?: number
    readonly rangeToInclusive?: number
  }
): number => {
  const o = {
    name: 'UnknownNumber',
    rangeFromInclusive: undefined,
    rangeToInclusive: undefined,
    ...options
  }

  return new ValidNumber(val, o.name, o.rangeFromInclusive, o.rangeToInclusive).getNumber()
}

export const createIntegerFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
    readonly rangeFromInclusive?: number
    readonly rangeToInclusive?: number
  }
): ValidInteger => {
  const o = {
    name: 'UnknownInteger',
    rangeFromInclusive: undefined,
    rangeToInclusive: undefined,
    ...options
  }

  return new ValidInteger(val, o.name, o.rangeFromInclusive, o.rangeToInclusive)
}

export const createPriceFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): ValidPrice => {
  const o = {
    name: 'UnknownPrice',
    ...options
  }

  return new ValidPrice(val, o.name)
}

export const createEmailFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
    readonly excludeChars?: string[]
  }
): ValidEmail => {
  const o = {
    name: 'UnknownEmail',
    excludeChars: [],
    ...options
  }

  return new ValidEmail(val, o.name, o.excludeChars)
}

export const createIataLocationFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): ValidIATALocation => {
  const o = {
    name: 'UnknownIataLocation',
    ...options
  }

  return new ValidIATALocation(val, o.name)
}

export const createIataLocationListFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): ValidIATALocationList => {
  const o = {
    name: 'UnknownIataLocationList',
    ...options
  }

  return new ValidIATALocationList(val, o.name)
}

export const createUrlFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): ValidUrl => {
  const o = {
    name: 'UnknownUrl',
    ...options
  }

  return new ValidUrl(val, o.name)
}

export const createOneOfEnumFromUnknown = <T>(
  val: unknown,
  options: {
    readonly name?: string
    readonly possibleValues: T
  }
): T[keyof T] => {
  const o = {
    name: 'OneOfEnum',
    ...options
  }

  return new ValidOneOfEnum(val, o.name, o.possibleValues).getValue()
}

export const createArrayFromUnknown = (val: unknown, options?: { readonly name?: string }): unknown[] => {
  const o = {
    name: 'ArrayOf',
    ...options
  }
  if (!Array.isArray(val)) {
    throw new Error(`Attribute ${o.name} is array.`)
  }

  return val
}
