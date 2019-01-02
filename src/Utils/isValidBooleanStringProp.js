const EMPTY_STRING = '';

export default function isValidBooleanStringProp(value) {
  return typeof value === 'boolean' || value === EMPTY_STRING;
}
