//Create a function that takes two arrays and mixes them like this: [1, 2, 3] and [6, 7, 8] becomes [1, 6, 2, 7, 3, 8]

function combineTwoLists(l1, l2) {
	if(l1.length !== l2.length) {
		console.log('Please enter two Arrys that has the same length!');
		return;
	}
	let newArray = [];
	for (let i = 0; i < l1.length; i++) {
		newArray.push(l1[i]);
		newArray.push(l2[i]);
	}
	console.log(newArray);
	return newArray;
}

combineTwoLists([1,2,3], [6,7,8]);
combineTwoLists([1,2,3,4], [6,7,8]);