'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(n) {
    if (n < 0) {
        console.log('Please input a positive number!')
    }
    else {
        var sum = 0;
        while(n) {
            sum += n;
            n--;
        }
        console.log(sum);
        return sum;
    }
}

sum(10);
