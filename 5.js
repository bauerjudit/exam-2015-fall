'use strict';

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price 
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

function CarStore(cars) {
	this.cars = {type: "", price: 0, year: 0};
	this.addCar = function(type, price, year) {
		this.cars["price"] = type;
		this.cars["type"] = price;
		this.cars["year"] = year;
	}

	this.getSumPrice = function(cars) {
		var sum = 0;
		this.cars.forEach(function(car) {
			sum += car.price;
		});
		return sum;
	}

	this.getOldestCarType = function(cars) {
		var oldestCar = cars[0];
		this.cars.forEach(function(car) {
			if(car["year"] > oldestCar["year"]) {
				oldestCar = car;
			}
		});
		return oldestCar;
	}
	
	this.deleteCarByType = function(cars, type) {
		var newListOfCars = [];
		cars.forEach(function(car) {
			if(car.type !== type) {
				newListOfCars.push(car);
			}
		});
		return newListOfCars;
	}	
};






var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];

var carStore = new CarStore(cars);

carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000 
console.log(carStore.getOldestCarType()); // 'Trabant'
carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000 

