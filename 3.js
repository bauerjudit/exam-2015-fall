'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'


function Circle(radius) {
	this.radius = radius;
	this.area = 0;
	this.circumference = 0;
	this.stats = "";
	this.pi = Math.PI;
	this.getCircumference = function(radius) {
		this.circumference = this.radius * (2 * this.pi)
		return this.circumference;
	}
	this.getArea = function(radius) {
		this.area = this.radius * this.radius * this.pi;
		return this.area;
	}
	this.toString = function() {
		this.stats = "Radius: " + this.radius + ", " + "Circumference: " + this.circumference + ", "+ "Area: " + this.area;
		return this.stats;
	}
};


var myCircle = new Circle(4);
console.log(myCircle.getCircumference());
console.log(myCircle.getArea());
console.log(myCircle.toString());










