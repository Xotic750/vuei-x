import isValidDate from 'Utils/isValidDate';
import toInteger from 'lodash/toInteger';
import toDateObject from 'Utils/toDateObject';

export default function incrementMonth(date, increment = 1) {
  const next = toDateObject(date);

  if (!isValidDate(next)) {
    return next;
  }

  next.setMonth(next.getMonth() + toInteger(increment));

  return next;
}
