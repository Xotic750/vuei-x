import isDateString from 'Utils/isDateString';
import stringToDate from 'Utils/stringToDate';

export default function toDateObject(date) {
  return isDateString(date) ? stringToDate(date) : new Date(date);
}
