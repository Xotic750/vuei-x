import isSearchNumber from 'Utils/isSearchNumber';
import isSearchNumberString from 'Utils/isSearchNumberString';

export default function isValidSearchNumber(value) {
  return isSearchNumber(value) || isSearchNumberString(value);
}
