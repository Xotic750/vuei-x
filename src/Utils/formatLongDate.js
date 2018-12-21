import deepFreeze from 'Utils/deepFreeze';
import dateTimeFormat from 'Utils/dateTimeFormat';

const options = deepFreeze({day: 'numeric', month: 'long', year: 'numeric'});

export default function formatLongDatedate(date, locale) {
  return dateTimeFormat(date, locale, options);
}
