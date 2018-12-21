import minutesFromHHMM from 'Utils/minutesFromHHMM';
import {SECONDS_IN_MINUTE} from 'Utils/time';

export default function secondsFromHHMM(hhmm) {
  return minutesFromHHMM(hhmm) * SECONDS_IN_MINUTE;
}
