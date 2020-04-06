import { ValidString } from 'src/validObjects/ValidString'
import { expect } from 'chai'

describe('ValidString', () => {
  it('should create', () => {
    const text = 'hola'
    expect(new ValidString(text).toString()).to.eq(text)
  })

  it('should create if empty', () => {
    const text = ''
    expect(new ValidString(text).toString()).to.eq(text)
  })
})
