'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}

function selectLastEvenNumber(list, callback) {
	var last = list[0];
	for (var i = 0; i < list.length; i++) {
		if(list[i]%2 == 0) {
			last = list[i];
		}
	}
	callback(last);
}



selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8