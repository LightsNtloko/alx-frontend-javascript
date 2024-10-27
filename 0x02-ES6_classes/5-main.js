import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    const testBuilding = new TestBuilding(200);
    testBuilding.evacuationWarningMessage(); // This will trigger the error
} catch (err) {
    console.log(err);
}
