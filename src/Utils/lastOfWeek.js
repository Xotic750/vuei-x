import getWeek from 'Utils/getWeek';

export default function lastOfWeek(date, weekStartDay = 1) {
  return getWeek(date, weekStartDay).pop();
}
