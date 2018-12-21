import isGregorianLeapYear from 'Utils/isGregorianLeapYear';

export default function daysInGregorianYear(year) {
  return isGregorianLeapYear(year) ? 366 : 365;
}
