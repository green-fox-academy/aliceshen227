'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.

function countE(s) {
	var count = 0;
  for(var i = 0; i < s.length; i++) {
		if(s[i] == 'e') {
			count += 1;
		}
	}
	return count;
}

var n = fruits.map(countE);

console.log(n); 