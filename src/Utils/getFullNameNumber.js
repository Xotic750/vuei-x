import get from 'lodash/get';
import getFullName from 'Utils/getFullName';

export default function getFullNameNumber(userObject) {
  return `${getFullName(userObject)} (${get(userObject, 'personal_id')})`;
}
