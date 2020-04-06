import { ValidPrice } from 'src/validObjects/ValidPrice'
import { expect } from 'chai'

describe('ValidPrice', () => {
  it('convert to JSON', () => {
    const data = { price: new ValidPrice('200 000 CZK') }

    expect(JSON.stringify(data)).to.eq('{"price":"200000 CZK"}')
  })

  it('constructor', () => {
    const test = (val: string, amount: number, currency: string, formatted?: string) => {
      const price = new ValidPrice(val)
      expect(price.toString()).to.eq(amount.toString() + ' ' + currency)
      expect(price.formatToLocale('# ##0. ¤')).to.eq(formatted ? formatted : val)
      expect(price.amount).to.eq(amount)
      expect(price.currency).to.eq(currency)
    }

    const testError = (val: string, err: string) => {
      expect(() => new ValidPrice(val)).to.throw(err)
    }

    test('0 CZK', 0, 'CZK')
    test('1 CZK', 1, 'CZK')
    test('12 CZK', 12, 'CZK')
    test('123 CZK', 123, 'CZK')
    test('1 234 CZK', 1234, 'CZK')
    test('12 345 CZK', 12345, 'CZK')
    test('123 456 CZK', 123456, 'CZK')
    test('1 234 567 CZK', 1234567, 'CZK')
    test('12 345 678 CZK', 12345678, 'CZK')
    test('123 456 789 CZK', 123456789, 'CZK')

    test('1  CZK', 1, 'CZK', '1 CZK')
    test('1000 CZK', 1000, 'CZK', '1 000 CZK')

    test('1 000 Kč CZK', 1000, 'CZK', '1 000 CZK')
    test('£1,000 CZK', 1000, 'CZK', '1 000 CZK')

    test('11 080 ETB', 11080, 'ETB', '11 080 ETB')

    testError('', `Attribute Price can not be empty.`)
    testError('CZK', `Attribute Price is not valid price: 'CZK'.`)
    testError('1CZK', `Attribute Price is not valid price: '1CZK'.`)
    testError('1', `Attribute Price is not valid price: '1'.`)
  })
})
