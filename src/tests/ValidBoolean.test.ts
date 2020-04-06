import { ValidBoolean } from 'src'
import { expect } from 'chai'

describe('ValidBoolean', () => {
  it('constructor', () => {
    const testError = (val: string, err: string) => {
      expect(() => new ValidBoolean(val)).to.throw(err)
    }

    expect(new ValidBoolean(true).getBoolean()).to.eq(true)
    expect(new ValidBoolean(true).toString()).to.eq('true')
    expect(new ValidBoolean(false).getBoolean()).to.eq(false)

    testError('true', `Attribute Boolean is not valid Boolean.`)
  })
})
