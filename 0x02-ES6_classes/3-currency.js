export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Gatter for 'code'
  get code() {
    return this._code;
  }

  // Setter for 'code'
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for 'name'
  get name() {
    return this._name;
  }

  // Setter for 'name'
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // The method to display full currency format
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
