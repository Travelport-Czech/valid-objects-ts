import { expect } from 'chai'
import { createArrayOf } from 'src'

describe('validObjectFactory', () => {
  it('createArrayOf', () => {
    const unknownData: unknown = ['one', 'two']
    const data = createArrayOf(unknownData)

    expect(data).to.equal(unknownData)
  })
})
