'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


for (var i = 1; i <= lineCount; i++) {
    var j = lineCount-i;
    console.log(' '.repeat(j) + '*'.repeat(2*i-1) + ' '.repeat(j));
}