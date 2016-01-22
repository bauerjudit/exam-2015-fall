'use strict';

// Write a function that checks, if an array contains a number
// that has 5 as divisor. If it has it should return true otherwise false.


/*function hasDivisableBy5(numbers) {
	//var output = '';
	numbers.forEach(function(number) {
		if(number % 5 !== 0) {
			output = "false";
		} else if (number % 5 === 0) {
			output = "true";
		}
	})
	//return output;
}*/


function hasDivisableBy5(numbers) {
	for(var i = 0; i < numbers.length; i++) {
		if(numbers[i] % 5 === 0) {
			return true;
		} else {
			return false;
		};
	};
}



/*function hasDivisableBy5(numbers) {
	var i = 0;
	while(i < numbers.length) {
		if(numbers[i] % 5 === 0) {
			return true;
		} else {
			return false;
		}
		i++;
	}
}*/

console.log(hasDivisableBy5([1, 8, 3, 6, 2])); // false
console.log(hasDivisableBy5([11, 7, 15, 9])); // true