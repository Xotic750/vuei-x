import parseTimeString from 'Utils/parseTimeString';
import {MINUTES_IN_HOUR} from 'Utils/time';

export default function minutesFromHHMM(hhmm) {
  const [h, m] = parseTimeString(hhmm);

  return h * MINUTES_IN_HOUR + m;
}
