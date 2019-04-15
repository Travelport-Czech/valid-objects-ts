import { ValidDate } from '@/validObjects/ValidDate'
import { expect } from 'chai'

describe('ValidDate', () => {
  it('Construct default', () => {
    const date = new ValidDate('2018-12-24')
    expect(date.toString()).to.equal('2018-12-24')
  })

  it('Construct YYYYMMDD', () => {
    const date = new ValidDate('20181224', 'YYYYMMDD')
    expect(date.toString()).to.equal('2018-12-24')
  })

  it('convert to JSON', async () => {
    const data = { date: new ValidDate('2018-12-24') }

    expect(JSON.stringify(data)).to.eq('{"date":"2018-12-24"}')
  })
})
