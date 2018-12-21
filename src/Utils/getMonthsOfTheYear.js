import range from 'lodash/range';
import dateTimeFormat from 'Utils/dateTimeFormat';
import oneOf from 'Utils/oneOf';
import {MONTHS_IN_YEAR} from 'Utils/time';

const defaultValue = 'long';
const formats = Object.freeze(['narrow', 'short', defaultValue]);
const createEpochDate = function _createEpochDate(monthValue) {
  return new Date(1970, monthValue, 1);
};

const dates = Object.freeze(range(MONTHS_IN_YEAR).map(createEpochDate));

export default function getMonthsOfTheYear(locale, format) {
  const datesIteratee = function _datesIteratee(date) {
    return dateTimeFormat(date, locale, {month: oneOf(format, formats, defaultValue)});
  };

  return dates.map(datesIteratee);
}
