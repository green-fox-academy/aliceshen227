const test = require('tape');
const required = require('./count-letters')

test('countLetterInString', function(t) {
  t.equal(required(0, 0), 0, "This is not a string");
  t.equal(required("A banana", "a"), 3, "Should be 3 as in this string");
  t.equal(required("An apple", "p"), 2, "Should be 2 ps in this string");
	t.end();
});
