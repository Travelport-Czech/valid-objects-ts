import { expect } from 'chai'
import { ValidOneOfEnum } from 'src/validObjects/ValidOneOfEnum'

describe('ValidOneOfEnum', () => {
  it('is in enum', () => {
    enum Cars {
      Fiat = 'fiat',
      Suzuki = 'suzuki'
    }
    expect(new ValidOneOfEnum('fiat', 'OneOfEnum', Cars).getValue()).to.eq('fiat')
  })

  it('is not in enum', () => {
    enum Cars {
      Fiat = 'fiat',
      Suzuki = 'suzuki'
    }
    expect(() => new ValidOneOfEnum('bad', 'OneOfEnum', Cars).getValue()).to.throw(
      `Attribute OneOfEnum is not one of enum.`
    )
  })
})
