'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

var height = 10;
var width = 10;
var length = 10;

var surface = (height * width + width * length + height * length) *2;
var volumn = height * width * length;

console.log('Surface Area: ' + surface);
console.log('Volumn: ' + volumn);