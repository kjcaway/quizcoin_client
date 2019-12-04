const moment = require('moment');
require('moment/locale/ko.js');

export function convertToFromNow(datetime: string) {
  return moment(datetime, moment.HTML5_FMT.DATETIME_LOCAL_MS).add(moment().utcOffset(), 'm').locale('ko').fromNow(); // utc to local, fromNow
}