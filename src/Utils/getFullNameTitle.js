import get from 'lodash/get';
import getFullName from 'Utils/getFullName';

export default function getFullNameTitle(userObject) {
  return `${get(userObject, 'title')} ${getFullName(userObject)}`;
}
