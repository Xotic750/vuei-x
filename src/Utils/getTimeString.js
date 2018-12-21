import isValidDate from 'Utils/isValidDate';
import pad from 'Utils/pad';
import toDateObject from 'Utils/toDateObject';

export default function getTimeString(date, options) {
  const d = toDateObject(date);

  if (!isValidDate(d)) {
    return d;
  }

  const parts = [d.getHours(), d.getMinutes()];
  const opts = {type: 'short'};

  Object.assign(opts, options);

  if (opts.type === 'long') {
    parts.push(d.getSeconds());
  }

  return parts.map(pad).join(':');
}
