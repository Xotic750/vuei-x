import isValidDate from 'Utils/isValidDate';
import toDateObject from 'Utils/toDateObject';

export default function startOfDay(date) {
  const clone = toDateObject(date);

  if (!isValidDate(clone)) {
    return clone;
  }

  clone.setHours(0, 0, 0, 0);

  return clone;
}
