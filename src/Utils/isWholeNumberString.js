import isIntegerString from 'Utils/isIntegerString';

export default function isWholeNumberString(value) {
  return isIntegerString(value) && !value.startsWith('-');
}
