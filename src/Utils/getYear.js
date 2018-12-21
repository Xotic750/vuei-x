import oneOf from 'Utils/oneOf';
import dateTimeFormat from 'Utils/dateTimeFormat';

const defaultValue = 'numeric';
const formats = Object.freeze(['2-digit', defaultValue]);

export default function getYear(date, locale, format) {
  return dateTimeFormat(date, locale, {year: oneOf(format, formats, defaultValue)});
}
