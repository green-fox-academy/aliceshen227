'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

function create2DArray(number) {
    var array = [];
    for(var i = 0; i <number; i++){
        array[i] = new Array(number).fill("0");
        array[i][number-1-i]="1";
        console.log(array[i].join(" "));
    }
    console.log(array);
}
create2DArray(4);