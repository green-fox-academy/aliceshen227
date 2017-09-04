const test = require('tape');
const required = require('./animalFarm')

test('Animal Farm Object', function(t) {
	var animal = new required.Animal();
	var f = new required.Farm();
	t.equal(animal.hunger, 50, "It has a default hunger of 50.");
	f.breed();
	f.breed();
	f.animal[1].eat();
	t.equal(f.animal[1].hunger, 49, "Should be 49.");
	f.animal[0].drink();
	t.equal(f.animal[0].thirst, 49, "Should be 49.");
	f.slaughter();
	t.equal(f.animal[0].hunger, 50, "Should be 50.");
	t.end();
});
