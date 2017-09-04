const test = require('tape');
const required = require('./circle')

test('Circle Object', function(t) {
	let c = new required(4);
  t.equal(c.toString(), 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669', "It should have the radius, circumference and area");
	t.end();
});
