export default function cleanSet(set, startString) {
  const newArray = [];
  if (startString.length === 0) return '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      newArray.push(item.replace(startString, ''));
    }
  }
  return newArray.join('-');
}
