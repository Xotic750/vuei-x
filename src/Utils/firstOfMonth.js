import toDateObject from 'Utils/toDateObject';
import isValidDate from 'Utils/isValidDate';

export default function firstOfMonth(date) {
  const clone = toDateObject(date);

  if (!isValidDate(clone)) {
    return clone;
  }

  clone.setDate(1);

  return clone;
}
