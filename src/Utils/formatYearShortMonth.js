import deepFreeze from 'Utils/deepFreeze';
import dateTimeFormat from 'Utils/dateTimeFormat';

const options = deepFreeze({month: 'short', year: 'numeric'});

export default function formatYearShortMonth(date, locale) {
  return dateTimeFormat(date, locale, options);
}
