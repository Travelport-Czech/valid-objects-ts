import { ValidDate } from 'src/validObjects/ValidDate'
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

  it('Diff in days', () => {
    const date = new ValidDate('2018-12-24')

    const date1 = new ValidDate('2018-12-24')
    expect(date.diffInDays(date1)).to.equal(0)

    const date2 = new ValidDate('2018-12-23')
    expect(date.diffInDays(date2)).to.equal(1)

    const date3 = new ValidDate('2018-12-25')
    expect(date.diffInDays(date3)).to.equal(-1)

    const date4 = new ValidDate('2017-12-24')
    expect(date.diffInDays(date4)).to.equal(365)
  })

  it('subtract days', () => {
    const date = new ValidDate('2018-12-24')
    expect(date.subtractDays(0).toString()).to.equal('2018-12-24')
    expect(date.subtractDays(1).toString()).to.equal('2018-12-23')
    expect(date.subtractDays(100).toString()).to.equal('2018-09-15')
  })

  it('add days', () => {
    const date = new ValidDate('2018-12-24')
    expect(date.addDays(0).toString()).to.equal('2018-12-24')
    expect(date.addDays(1).toString()).to.equal('2018-12-25')
    expect(date.addDays(100).toString()).to.equal('2019-04-03')
  })
})
