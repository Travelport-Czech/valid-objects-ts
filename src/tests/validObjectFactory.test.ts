import { expect } from 'chai'
import { createArrayFromUnknown, createIataLocationListFromUnknown } from 'src'

describe('validObjectFactory', () => {
  it('createArrayFromUnknown', () => {
    const unknownData: unknown = ['one', 'two']
    const data = createArrayFromUnknown(unknownData)

    expect(data.success).to.equal(true, 'Result must be true')
    expect(data.success && data.data).to.equal(unknownData)
  })

  it('createIataLocationListFromUnknown without plus success', () => {
    const unknownData: unknown = 'LON/PRG'
    const data = createIataLocationListFromUnknown(unknownData)

    expect(data.success).to.equal(true, 'Result must be true')
    expect(data.success && data.data.toString()).to.equal(unknownData)
  })

  it('createIataLocationListFromUnknown without plus error', () => {
    const unknownData: unknown = 'LON+/PRG'
    const data = createIataLocationListFromUnknown(unknownData)

    expect(data.success).to.equal(false, 'Result must be false')
    expect(data.error).to.equal(`Attribute UnknownIataLocationList is not valid IATALocationList: 'LON+/PRG'.`)
  })

  it('createIataLocationListFromUnknown with plus success', () => {
    const unknownData: unknown = 'LON+/PRG'
    const data = createIataLocationListFromUnknown(unknownData, { allowPlus: true })

    expect(data.success).to.equal(true, 'Result must be true')
    expect(data.success && data.data.toString()).to.equal(unknownData)
  })
})
