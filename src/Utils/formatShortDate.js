import deepFreeze from 'Utils/deepFreeze';
import dateTimeFormat from 'Utils/dateTimeFormat';

const options = deepFreeze({day: 'numeric', month: 'short', year: 'numeric'});

export default function formatShortDate(date, locale) {
  return dateTimeFormat(date, locale, options);
}
