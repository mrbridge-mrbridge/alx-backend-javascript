export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } else if (hint === 'string') {
      return this._location;
    }
  }
}
