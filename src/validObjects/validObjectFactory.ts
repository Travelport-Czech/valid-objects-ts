import { FnResult, FnResultError } from './FnResult'
import { ValidBoolean } from './ValidBoolean'
import { ValidDate } from './ValidDate'
import { ValidDateTime } from './ValidDateTime'
import { ValidEmail } from './ValidEmail'
import { ValidIATALocation } from './ValidIATALocation'
import { ValidIATALocationList } from './ValidIATALocationList'
import { ValidInteger } from './ValidInteger'
import { ValidNotEmptyString } from './ValidNotEmptyString'
import { ValidNumber } from './ValidNumber'
import { ValidOneOfEnum } from './ValidOneOfEnum'
import { ValidPrice } from './ValidPrice'
import { ValidString } from './ValidString'
import { ValidUrl } from './ValidUrl'

const resolveError = (e: unknown): FnResultError => {
  if (e instanceof Error) {
    return {
      success: false,
      error: e.message
    }
  }
  throw e
}

export const createBooleanFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): FnResult<boolean> => {
  const o = {
    name: 'UnknownBoolean',
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidBoolean(val, o.name).getBoolean()
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createDateFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): FnResult<ValidDate> => {
  const o = {
    name: 'UnknownDate',
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidDate(val, o.name)
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createDateTimeFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): FnResult<ValidDateTime> => {
  const o = {
    name: 'UnknownDateTime',
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidDateTime(val, o.name)
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createNotEmptyStringFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): FnResult<ValidNotEmptyString> => {
  const o = {
    name: 'UnknownNotEmptyString',
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidNotEmptyString(val, o.name)
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createStringFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): FnResult<string> => {
  const o = {
    name: 'UnknownString',
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidString(val, o.name).getString()
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createNumberFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
    readonly rangeFromInclusive?: number
    readonly rangeToInclusive?: number
  }
): FnResult<number> => {
  const o = {
    name: 'UnknownNumber',
    rangeFromInclusive: undefined,
    rangeToInclusive: undefined,
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidNumber(val, o.name, o.rangeFromInclusive, o.rangeToInclusive).getNumber()
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createIntegerFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
    readonly rangeFromInclusive?: number
    readonly rangeToInclusive?: number
  }
): FnResult<ValidInteger> => {
  const o = {
    name: 'UnknownInteger',
    rangeFromInclusive: undefined,
    rangeToInclusive: undefined,
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidInteger(val, o.name, o.rangeFromInclusive, o.rangeToInclusive)
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createPriceFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): FnResult<ValidPrice> => {
  const o = {
    name: 'UnknownPrice',
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidPrice(val, o.name)
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createEmailFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
    readonly excludeChars?: string[]
  }
): FnResult<ValidEmail> => {
  const o = {
    name: 'UnknownEmail',
    excludeChars: [],
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidEmail(val, o.name, o.excludeChars)
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createIataLocationFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
    readonly allowPlus?: boolean
  }
): FnResult<ValidIATALocation> => {
  const o = {
    name: 'UnknownIataLocation',
    allowPlus: false,
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidIATALocation(val, o.name, o.allowPlus)
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createIataLocationListFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
    readonly allowPlus?: boolean
  }
): FnResult<ValidIATALocationList> => {
  const o = {
    name: 'UnknownIataLocationList',
    allowPlus: false,
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidIATALocationList(val, o.name, o.allowPlus)
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createUrlFromUnknown = (
  val: unknown,
  options?: {
    readonly name?: string
  }
): FnResult<ValidUrl> => {
  const o = {
    name: 'UnknownUrl',
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidUrl(val, o.name)
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createOneOfEnumFromUnknown = <T>(
  val: unknown,
  options: {
    readonly name?: string
    readonly possibleValues: T
  }
): FnResult<T[keyof T]> => {
  const o = {
    name: 'OneOfEnum',
    ...options
  }

  try {
    return {
      success: true,
      data: new ValidOneOfEnum(val, o.name, o.possibleValues).getValue()
    }
  } catch (e) {
    return resolveError(e)
  }
}

export const createArrayFromUnknown = <T>(val: T, options?: { readonly name?: string }): FnResult<T & unknown[]> => {
  const o = {
    name: 'ArrayOf',
    ...options
  }
  if (!Array.isArray(val)) {
    return {
      success: false,
      error: `Attribute ${o.name} is array.`
    }
  }

  return {
    success: true,
    data: val
  }
}
