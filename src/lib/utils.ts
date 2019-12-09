const moment = require('moment');
const defaultImage = require('../static/images/default_profile.png')
require('moment/locale/ko.js');

export function convertToFromNow(datetime: string) {
  return moment(datetime, moment.HTML5_FMT.DATETIME_LOCAL_MS).add(moment().utcOffset(), 'm').locale('ko').fromNow(); // utc to local, fromNow
}

export function defaultToProfile(path: string) {
  if (path === '') {
    return defaultImage
  } else {
    return path;
  }
}