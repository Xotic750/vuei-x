import toDateObject from 'Utils/toDateObject';
import isValidDate from 'Utils/isValidDate';
import incrementMonth from 'Utils/incrementMonth';

export default function lastOfMonth(date) {
  const clone = toDateObject(date);

  if (!isValidDate(clone)) {
    return clone;
  }

  const next = incrementMonth(clone);
  next.setDate(0);

  return next;
}
