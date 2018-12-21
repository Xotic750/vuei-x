import range from 'lodash/range';
import isValidDate from 'Utils/isValidDate';
import toDateObject from 'Utils/toDateObject';
import isOneOf from 'Utils/isOneOf';
import {DAYS_IN_WEEK} from 'Utils/time';

const weekStartDays = Object.freeze(range(DAYS_IN_WEEK));
const TWO_WEEKS = DAYS_IN_WEEK * 2;

export default function getWeekDay(date, weekStartDay = 1) {
  const clone = toDateObject(date);

  if (!isValidDate(clone) || !isOneOf(weekStartDay, weekStartDays)) {
    return NaN;
  }

  return (clone.getDay() - weekStartDay + TWO_WEEKS) % DAYS_IN_WEEK;
}
