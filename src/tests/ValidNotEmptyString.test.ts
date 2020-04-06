import { ValidNotEmptyString } from 'src/validObjects/ValidNotEmptyString'
import { expect } from 'chai'

describe('ValidNotEmptyString', () => {
  it('should create', () => {
    const text = 'hola'
    expect(new ValidNotEmptyString(text).toString()).to.eq(text)
  })

  it('should throw error if empty', () => {
    expect(() => new ValidNotEmptyString('')).to.throw(`Attribute NotEmptyString can not be empty.`)
  })
})
