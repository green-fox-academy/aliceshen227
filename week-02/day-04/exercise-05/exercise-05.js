'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];

order = girls.copyWithin();
boys.forEach(function(value, index, element) {
    order.splice(index*2+1, 0, element[index]);
});

console.log(order);