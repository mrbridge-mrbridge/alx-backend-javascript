export default function updateUniqueItems(mapItem) {
  if (!(mapItem instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of mapItem) {
    if (value === 1) {
      mapItem.set(key, 100);
    }
  }
  return mapItem;
}
