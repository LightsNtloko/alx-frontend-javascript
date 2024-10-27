export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for `sqft`
  get sqft() {
    return this._sqft;
  }

  // Abstract method that must be implemented by subclasses
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
