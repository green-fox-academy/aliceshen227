'use strict';

var lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (var i = 1; i <= lineCount; i++) {
    var j = lineCount-i;
    if (i >= lineCount/2+1) {
        console.log(' '.repeat(i-1) + '*'.repeat(2*j+1) + ' '.repeat(i-1));
    }
    else {
        console.log(' '.repeat(j) + '*'.repeat(2*i-1) + ' '.repeat(j));
    }
    
}