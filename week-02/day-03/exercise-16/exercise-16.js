'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorial(n) {
    if (n <= 0) {
        console.log('Please input a positive number!')
    }
    else {
        var result = 1;
        while(n) {
            result *= (n);
            n--;
        }
        console.log(result);
        return result;
    }
}

factorial(4);

