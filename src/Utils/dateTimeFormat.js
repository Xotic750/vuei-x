import toDateObject from 'Utils/toDateObject';
import isValidDate from 'Utils/isValidDate';
import isBCP47 from 'Utils/isBCP47';
import getContentLanguage from 'Utils/getContentLanguage';

export default function dateTimeFormat(date, locale, options) {
  const d = toDateObject(date);

  if (!isValidDate(d)) {
    return 'Invalid Date';
  }

  const loc = isBCP47(locale) ? locale : getContentLanguage();

  return new Intl.DateTimeFormat(loc, Object(options)).format(d);
}
