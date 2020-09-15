import { expect } from 'chai'
import { createArrayFromUnknown } from 'src'

describe('validObjectFactory', () => {
  it('createArrayFromUnknown', () => {
    const unknownData: unknown = ['one', 'two']
    const data = createArrayFromUnknown(unknownData)

    expect(data).to.equal(unknownData)
  })
})
