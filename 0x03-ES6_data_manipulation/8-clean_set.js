export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const result = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.substring(startString.length));
    }
  }

  return result.join('-');
}
