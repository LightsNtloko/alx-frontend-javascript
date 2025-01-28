export default class ALXClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // When cast to a number, return the size
  valueOf() {
    return this._size;
  }

  // When cast to a string, return the location
  toString() {
    return this._location;
  }
}

