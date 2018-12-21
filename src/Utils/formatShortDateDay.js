import deepFreeze from 'Utils/deepFreeze';
import dateTimeFormat from 'Utils/dateTimeFormat';

const options = deepFreeze({day: 'numeric', month: 'numeric', weekday: 'short'});

export default function formatShortDateDay(date, locale) {
  return dateTimeFormat(date, locale, options);
}
