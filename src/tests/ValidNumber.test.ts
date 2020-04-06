import { ValidNumber } from 'src/validObjects/ValidNumber'
import { expect } from 'chai'

describe('ValidNumber', () => {
  it('Construct default', () => {
    expect(new ValidNumber(0).getNumber()).to.equal(0)
    expect(new ValidNumber(1).getNumber()).to.equal(1)
    expect(new ValidNumber(-1).getNumber()).to.equal(-1)
    expect(new ValidNumber(-1000000000).getNumber()).to.equal(-1000000000)
    expect(new ValidNumber(1000000000).getNumber()).to.equal(1000000000)
  })

  it('Construct with range', () => {
    expect(new ValidNumber(-2, 'Number', -2, 2).getNumber()).to.equal(-2)
    expect(new ValidNumber(0, 'Number', -2, 2).getNumber()).to.equal(0)
    expect(new ValidNumber(1, 'Number', -2, 2).getNumber()).to.equal(1)
    expect(new ValidNumber(2, 'Number', -2, 2).getNumber()).to.equal(2)

    expect(() => new ValidNumber(-3, 'Number', -2, 2)).to.throw('Attribute Number can not be smaller than -2: -3.')
    expect(() => new ValidNumber(0, 'Number', 1, 2)).to.throw('Attribute Number can not be smaller than 1: 0.')
    expect(() => new ValidNumber(3, 'Number', 1, 2)).to.throw('Attribute Number can not be bigger than 2: 3.')
  })
})
