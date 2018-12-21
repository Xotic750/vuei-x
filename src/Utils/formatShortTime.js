import deepFreeze from 'Utils/deepFreeze';
import dateTimeFormat from 'Utils/dateTimeFormat';

const options = deepFreeze({hour: '2-digit', minute: '2-digit', hour12: false});

export default function formatShortTime(date, locale) {
  return dateTimeFormat(date, locale, options);
}
