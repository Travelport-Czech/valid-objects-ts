import { ValidBoolean } from 'src'
import { expect } from 'chai'

describe('ValidBoolean', () => {
  it('constructor', () => {
    const testError = (val: string, err: string) => {
      expect(() => new ValidBoolean(val)).to.throw(err)
    }

    expect(new ValidBoolean(true).value).to.eq(true)
    expect(new ValidBoolean(true).toString()).to.eq('true')
    expect(new ValidBoolean(false).value).to.eq(false)

    testError('true', `Invalid boolean '"true" is type string'.`)
  })
})
