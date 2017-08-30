'use strict';

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method 
// - Print the fourth element as a test

var s = [1, 2, 3, 8, 5, 6];

var newS = s.map(function(value) {
    if (value ===8 ) {
        return 4;
    }
    else {
        return value;
    }
});

console.log(newS[3]);