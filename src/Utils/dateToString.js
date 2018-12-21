import isValidDate from 'Utils/isValidDate';
import pad from 'Utils/pad';

export default function dateToString(d) {
  if (!isValidDate(d)) {
    return 'Invalid Date';
  }

  return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(pad).join('-');
}
