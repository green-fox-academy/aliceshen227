'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'


var Circle = function(radius) {
  this.radius = radius;
  this.getCircumference = function() {
		var circumference = this.radius * Math.PI * 2
		console.log(circumference)
		return circumference;
	}
	this.getArea = function() {
		var area = this.radius * this.radius * Math.PI;
		console.log(area);
		return area;
	}
	this.toString = function() {
		var s = 'Radius: ' + this.radius + ', Circumference: ' + this.getCircumference() + ', Area: ' + this.getArea();
		return s;
	}
};

module.exports = Circle;


//var c = new Circle(4);
//console.log(c.toString());