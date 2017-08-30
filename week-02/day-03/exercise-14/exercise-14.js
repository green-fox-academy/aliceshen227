'use strict';

// - Create a variable named `am` and assign the value `dog` to it
// - Write a function called `appendS` that gets a string as an input
//   and appends an 's' character to its end
// - Print the result of `appendS(am)` to the console

var am = 'dog';

function appendS(s) {
    if (s === undefined) {
        console.log("Please enter your input!");
    }
    else{
        console.log(s.concat('s'));
    }
}

appendS(am);