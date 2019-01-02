import isWholeNumberString from 'Utils/isWholeNumberString';
import isWholeNumber from 'Utils/isWholeNumber';

export default function isValidWholeNumber(value) {
  return isWholeNumber(value) || isWholeNumberString(value);
}
