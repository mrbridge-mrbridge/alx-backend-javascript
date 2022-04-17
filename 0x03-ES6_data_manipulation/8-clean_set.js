export default function cleanSet(set, startString) {
  const newArray = [];
  if (!startString || startString.length === 0) return '';
  for (const item of set) {
    if (typeof (item) === 'undefined') continue;
    else if (item.startsWith(startString)) {
      newArray.push(item.replace(startString, ''));
    }
  }
  return newArray.join('-');
}
