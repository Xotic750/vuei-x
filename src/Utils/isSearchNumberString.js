import isSearchNumber from 'Utils/isSearchNumber';

export default function isSearchNumberString(value) {
  return value === '-1' || isSearchNumber(value);
}
