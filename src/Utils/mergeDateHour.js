import isValidDate from 'Utils/isValidDate';
import toDateObject from 'Utils/toDateObject';
import parseTimeString from 'Utils/parseTimeString';

export default function mergeDateHour(date, hour) {
  const d = toDateObject(date);

  if (!isValidDate(d)) {
    return d;
  }

  const [h, m] = parseTimeString(hour);

  d.setHours(h);
  d.setMinutes(m);
  d.setSeconds(0);
  d.setMilliseconds(0);

  return d;
}
