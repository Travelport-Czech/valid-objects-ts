import { expect } from 'chai'
import { ValidInteger } from 'src/validObjects/ValidInteger'

describe('ValidInteger', () => {
  it('Construct default', () => {
    expect(new ValidInteger(0).getNumber()).to.equal(0)
    expect(new ValidInteger(1).getNumber()).to.equal(1)
    expect(new ValidInteger(-1).getNumber()).to.equal(-1)
    expect(new ValidInteger(-1000000000).getNumber()).to.equal(-1000000000)
    expect(new ValidInteger(1000000000).getNumber()).to.equal(1000000000)
    expect(() => new ValidInteger(1.23)).to.throw(`Attribute Integer is not number: '1.23'.`)
  })

  it('Construct with range', () => {
    expect(new ValidInteger(-2, 'Number', -2, 2).getNumber()).to.equal(-2)
    expect(new ValidInteger(0, 'Number', -2, 2).getNumber()).to.equal(0)
    expect(new ValidInteger(1, 'Number', -2, 2).getNumber()).to.equal(1)
    expect(new ValidInteger(2, 'Number', -2, 2).getNumber()).to.equal(2)

    expect(() => new ValidInteger(-3, 'Number', -2, 2)).to.throw('Attribute Number can not be smaller than -2: -3.')
    expect(() => new ValidInteger(0, 'Number', 1, 2)).to.throw('Attribute Number can not be smaller than 1: 0.')
    expect(() => new ValidInteger(3, 'Number', 1, 2)).to.throw('Attribute Number can not be bigger than 2: 3.')
  })
})
