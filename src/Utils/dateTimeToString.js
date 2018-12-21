import dateToString from 'Utils/dateToString';
import getTimeString from 'Utils/getTimeString';
import isValidDate from 'Utils/isValidDate';

export default function dateTimeToString(d, options) {
  if (!isValidDate(d)) {
    return 'Invalid Date';
  }

  const opts = {separator: 'T', type: 'long', ...Object(options)};

  return dateToString(d) + opts.separator + getTimeString(d, opts.type);
}
