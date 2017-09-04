const test = require('tape');
const required = require('./pirate-horde')

var pirates = [
  {name: 'Jack', gold: 4, hasWoodenLeg: true},
  {name: 'Bob', gold: 0, hasWoodenLeg: false},
  {name: 'Olaf', gold: 3, hasWoodenLeg: true},
  {name: 'Steve', gold: 2, hasWoodenLeg: true},
  {name: 'Ian', gold: 10, hasWoodenLeg: false},
];

test('PirateHorde Object', function(t) {
	let p = new required(pirates);
	p.addPirate('Greg', 6, true);
  t.equal(p.getSumGold(), 25, "It should be 25");
	t.equal(p.getLongestName(), 'Steve', "It should be steve");
  t.deepEqual(p.getTheWoodenLegNames(), ['Jack', 'Olaf', 'Steve', 'Greg'], "It should be a array of four pirates");
	t.end();
});
