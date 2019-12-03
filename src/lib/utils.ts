const moment = require('moment');

export function convertToFromNow(datetime: string) {
  return moment(datetime, moment.HTML5_FMT.DATETIME_LOCAL_MS).add(moment().utcOffset(), 'm').fromNow(); // utc to local, fromNow
}