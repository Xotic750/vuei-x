import getWeek from 'Utils/getWeek';

export default function firstOfWeek(date, weekStartDay = 1) {
  return getWeek(date, weekStartDay).shift();
}
