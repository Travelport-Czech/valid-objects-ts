export const iataLocationsRegexp = new RegExp(/^[A-Z]{3}(\/[A-Z]{3})*$/)
export const dateRegexps = {
  'YYYY-MM-DD': new RegExp(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/),
  YYYYMMDD: new RegExp(/^([0-9]{4})([0-9]{2})([0-9]{2})$/)
}
export const dateTimeRegexp = new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/)

export const formatSystemDateTime = 'YYYY-MM-DD HH:mm:ss'
export const formatSystemDate = 'YYYY-MM-DD'
