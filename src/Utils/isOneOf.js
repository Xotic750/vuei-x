import oneOf from 'Utils/oneOf';

export default function isOneOf(comparate, comparates) {
  return Boolean(oneOf(comparate, comparates));
}
