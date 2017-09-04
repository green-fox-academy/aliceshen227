const test = require('tape');
const required = require('./sharpie')

test('Sharpie Object', function(t) {
	let n = new required("Blue", 24.5);
  t.equal(n.inkAmount, 100.0, "It has a default inkAmount of 100");
	n.use();
  t.equal(n.inkAmount, 75.5, "Should be 75.5 after one use");
	n.use();
  t.equal(n.inkAmount, 51.0, "Should be 51.0 after one use");
	t.end();
});
