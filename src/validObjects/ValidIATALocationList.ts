import { InvalidIATALocationError } from '@/errors/InvalidIATALocationError'
import { ValidObjectError } from '@/errors/ValidObjectError'
import { iataLocationsRegexp } from '@/validObjects/consts'
import { ValidIATALocation } from '@/validObjects/ValidIATALocation'
import { ValidString } from '@/validObjects/ValidString'

const validate = (val: string): string => {
  if (!iataLocationsRegexp.test(val)) {
    throw new InvalidIATALocationError(val)
  }

  return val
}

export class ValidIATALocationList extends ValidString {
  private readonly locationCodes: ValidIATALocation[]

  // tslint:disable-next-line:no-any
  constructor(val: any) {
    try {
      super(val)
    } catch (err) {
      if (!(err instanceof ValidObjectError)) {
        throw err
      }
      throw new InvalidIATALocationError(err.message)
    }
    this.locationCodes = validate(this.value)
      .split('/')
      .map((code: string) => {
        return new ValidIATALocation(code)
      })
  }

  get codes(): ValidIATALocation[] {
    return this.locationCodes
  }
}
