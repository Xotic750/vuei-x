import deepFreeze from 'Utils/deepFreeze';
import dateTimeFormat from 'Utils/dateTimeFormat';

const options = deepFreeze({weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});

export default function formatLongDateWeekDay(date, locale) {
  return dateTimeFormat(date, locale, options);
}
