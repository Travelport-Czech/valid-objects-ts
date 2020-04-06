import { ValidEmail } from 'src/validObjects/ValidEmail'
import { expect } from 'chai'

describe('ValidEmail', () => {
  it('constructor', () => {
    const test = (val: string) => {
      const price = new ValidEmail(val)
      expect(price.toString()).to.eq(val)
    }

    const testError = (val: string, err: string) => {
      expect(() => new ValidEmail(val)).to.throw(err)
    }

    test('test@test.cz')
    test('test{@test.cz')

    testError('m', `Attribute Email is not valid Email: 'm'.`)
    testError('m@', `Attribute Email is not valid Email: 'm@'.`)
    testError('@m', `Attribute Email is not valid Email: '@m'.`)
    testError('@m.cz', `Attribute Email is not valid Email: '@m.cz'.`)
  })
})
