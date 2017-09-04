const test = require('tape');
const required = require('./spacex')

var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];


//console.log(spaceX.getStats()); // rockets: 3, fuel: 100, launches: 1
//spaceX.refillAll();
//console.log(spaceX.getStats()); // rockets: 3, fuel: 66, launches: 1
//spaceX.launchAll();
//console.log(spaceX.getStats()); // rockets: 3, fuel: 66, launches: 4
//spaceX.buyFuel(50);
//console.log(spaceX.getStats()); // rockets: 3, fuel: 116, launches: 4
test('SpaceX Object', function(t) {
	var falcon1 = new required.Rocket('falcon1');
	var returnedFalcon9 = new required.Rocket('falcon9', 11, 1);
	t.equal(falcon1.refill(), 5, "This should be 5"); 
	falcon1.launch();
	t.equal(falcon1.getStats(), "name: falcon1, fuel: 4, launches: 1", "should be a string");
	t.equal(returnedFalcon9.getStats(), "name: falcon9, fuel: 11, launches: 1", "should be a string");
	var spaceX = new required.SpaceX(100);
	var falcon1 = new required.Rocket('falcon1', 0, 0);
	var falcon9 = new required.Rocket('falcon9', 0, 0);
	var returnedFalcon9 = new required.Rocket('falcon9', 11, 1);
	t.equal(returnedFalcon9.getStats(), "name: falcon9, fuel: 11, launches: 1", "should be a string");
	spaceX.addRocket(falcon1);
	spaceX.addRocket(falcon9);
	spaceX.addRocket(returnedFalcon9);
	t.equal(spaceX.getStats(), "rockets: 3, fuel: 100, launches: 1", "should be a string");
	spaceX.refillAll();
	t.equal(spaceX.getStats(), "rockets: 3, fuel: 66, launches: 1", "should be a string");
	spaceX.launchAll();
	t.equal(spaceX.getStats(), "rockets: 3, fuel: 66, launches: 4", "should be a string");
	spaceX.buyFuel(50);
	t.equal(spaceX.getStats(), "rockets: 3, fuel: 116, launches: 4", "should be a string");
	t.end();
});
