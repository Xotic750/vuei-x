import isWholeNumberString from 'Utils/isWholeNumberString';

export default function isCountingNumberString(value) {
  return isWholeNumberString(value) && !value.startsWith('0');
}
