import { ValidNumber } from '@/validObjects/ValidNumber'
import { expect } from 'chai'

describe('ValidNumber', () => {
  it('Construct default', () => {
    expect(new ValidNumber(0).value).to.equal(0)
    expect(new ValidNumber(1).value).to.equal(1)
    expect(new ValidNumber(-1).value).to.equal(-1)
    expect(new ValidNumber(-1000000000).value).to.equal(-1000000000)
    expect(new ValidNumber(1000000000).value).to.equal(1000000000)
  })

  it('Construct with range', () => {
    expect(new ValidNumber(-2, -2, 2).value).to.equal(-2)
    expect(new ValidNumber(0, -2, 2).value).to.equal(0)
    expect(new ValidNumber(1, -2, 2).value).to.equal(1)
    expect(new ValidNumber(2, -2, 2).value).to.equal(2)

    expect(() => new ValidNumber(-3, -2, 2)).to.throw("Invalid number 'Number (-3) can not be smaller than -2'.")
    expect(() => new ValidNumber(0, 1, 2)).to.throw("Invalid number 'Number (0) can not be smaller than 1'.")
    expect(() => new ValidNumber(3, 1, 2)).to.throw("Invalid number 'Number (3) can not be bigger than 2'.")
  })
})
