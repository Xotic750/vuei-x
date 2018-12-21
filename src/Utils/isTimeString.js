import inRange from 'lodash/inRange';
import isWholeNumber from 'Utils/isWholeNumber';
import parseTimeString from 'Utils/parseTimeString';
import {HOURS_IN_DAY, MINUTES_IN_HOUR, SECONDS_IN_MINUTE, MS_IN_SECOND} from 'Utils/time';

const PARTS_RANGE = Object.freeze([HOURS_IN_DAY, MINUTES_IN_HOUR, SECONDS_IN_MINUTE, MS_IN_SECOND]);
const isPartInRange = function _isPartInRange(number, index) {
  return isWholeNumber(number) && inRange(number, PARTS_RANGE[index]);
};

export default function isTimeString(value) {
  const parts = parseTimeString(value);

  return Array.isArray(parts) && parts.length === PARTS_RANGE.length && parts.every(isPartInRange);
}
