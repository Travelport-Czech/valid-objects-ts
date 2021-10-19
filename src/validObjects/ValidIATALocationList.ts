import { iataLocationsRegexp, iataLocationsRegexpWithPlus } from '@/validObjects/consts'
import { ValidIATALocation } from '@/validObjects/ValidIATALocation'
import { ValidNotEmptyString } from '@/validObjects/ValidNotEmptyString'

export class ValidIATALocationList extends ValidNotEmptyString {
  private readonly locationCodes: ValidIATALocation[]

  constructor(val: unknown, name: string = 'IATALocationList', allowPlus: boolean = false) {
    super(val, name)
    if (!allowPlus && !iataLocationsRegexp.test(this.getString())) {
      throw new Error(`Attribute ${name} is not valid IATALocationList: '${this.getString()}'.`)
    }

    if (allowPlus && !iataLocationsRegexpWithPlus.test(this.getString())) {
      throw new Error(`Attribute ${name} is not valid IATALocationList: '${this.getString()}'.`)
    }

    this.locationCodes = this.getString()
      .split('/')
      .map((code: string) => {
        return new ValidIATALocation(code, 'IATALocation', allowPlus)
      })
  }

  get codes(): ValidIATALocation[] {
    return this.locationCodes
  }
}
