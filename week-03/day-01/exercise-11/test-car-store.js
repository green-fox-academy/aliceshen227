const test = require('tape');
const required = require('./car-store')

var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];

test('CarStore Object', function(t) {
	let carStore = new required(cars);
	carStore.addCar('Smart', 18000, 2011);
	t.equal(carStore.getSumPrice(), 122000, "It should be 122000");
	t.equal(carStore.getOldestCarType(), 'Trabant', "It should be 'Trabant'");
	carStore.deleteCarByType('Ferrari');
	t.equal(carStore.getSumPrice(), 82000, "It should be 82000");
	t.end();
});
