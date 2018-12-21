import toDateObject from 'Utils/toDateObject';
import isValidDate from 'Utils/isValidDate';
import {MINUTES_IN_HOUR, SECONDS_IN_MINUTE} from 'Utils/time';

export default function getSecondsInDay(date) {
  const dt = toDateObject(date);

  if (!isValidDate(dt)) {
    return NaN;
  }

  const minutes = dt.getMinutes() + MINUTES_IN_HOUR * dt.getHours();

  return SECONDS_IN_MINUTE * minutes + dt.getSeconds();
}
