import { expect } from 'chai'
import { createArrayFromUnknown } from 'src'

describe('validObjectFactory', () => {
  it('createArrayFromUnknown', () => {
    const unknownData: unknown = ['one', 'two']
    const data = createArrayFromUnknown(unknownData)

    expect(data.success).to.equal(true, 'Result must be true')
    expect(data.success && data.data).to.equal(unknownData)
  })
})
