export default class Building {
  constructor(sqft) {
    // Check if the class is being instantiated directly
    if (new.target === Building) {
      throw new Error("Cannot create an instance of an abstract class");
    }
    this._sqft = sqft;
  }

  // Getter for 'sqft'
  get sqft() {
    return this._sqft;
  }

  // Method to ensure subclasses implement this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
