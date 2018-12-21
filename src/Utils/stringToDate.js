import parseDecimal from 'Utils/parseDecimal';

export default function stringToDate(str) {
  const [year, month, day] = String(str)
    .split('-')
    .map(parseDecimal);

  return new Date(year, month - 1, day);
}
