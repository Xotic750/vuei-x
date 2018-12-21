import deepFreeze from 'Utils/deepFreeze';
import dateTimeFormat from 'Utils/dateTimeFormat';

const options = deepFreeze({day: 'numeric', month: 'short', weekday: 'short'});

export default function formatShortDateMonthDay(date, locale) {
  return dateTimeFormat(date, locale, options);
}
