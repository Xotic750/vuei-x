import pad from 'Utils/pad';
import minutesFromHHMM from 'Utils/minutesFromHHMM';
import {SECONDS_IN_MINUTE} from 'Utils/time';

export default function incrementTimeString(hhmm, addMinutes = 0) {
  const minutes = minutesFromHHMM(hhmm) + addMinutes;

  return [Math.floor(minutes / SECONDS_IN_MINUTE), minutes % SECONDS_IN_MINUTE].map(pad).join(':');
}
