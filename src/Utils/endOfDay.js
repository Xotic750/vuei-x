import isValidDate from 'Utils/isValidDate';
import toDateObject from 'Utils/toDateObject';

export default function endOfDay(date) {
  const clone = toDateObject(date);

  if (!isValidDate(clone)) {
    return clone;
  }

  clone.setHours(23, 59, 59, 999);

  return clone;
}
