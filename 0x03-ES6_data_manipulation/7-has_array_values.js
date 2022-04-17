export default function hasValuesFromArray(set, array) {
  for (let item of array) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
