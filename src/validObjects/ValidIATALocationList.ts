import { iataLocationsRegexp } from '@/validObjects/consts'
import { ValidIATALocation } from '@/validObjects/ValidIATALocation'
import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'

export class ValidIATALocationList extends ValidNotEmptyString {
  private readonly locationCodes: ValidIATALocation[]

  constructor(val: unknown, name: string = 'IATALocationList') {
    super(val, name)
    if (!iataLocationsRegexp.test(this.getString())) {
      throw new Error(`Attribute ${name} is not valid IATALocationList: '${this.getString()}'.`)
    }

    this.locationCodes = this.getString()
      .split('/')
      .map((code: string) => {
        return new ValidIATALocation(code)
      })
  }

  get codes(): ValidIATALocation[] {
    return this.locationCodes
  }
}
