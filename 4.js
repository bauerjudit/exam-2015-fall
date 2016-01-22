'use strict';

// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.

function countLetters(string) {
	var output = {letters: "", count: 0};
	for (var i = 0; i < string.length; i++) {
		output["letters"] = string[i] && output["count"]++;
	}
	return output;
}



/*function countLetters(string) {
	var slicesString = [];
	for(var i = 0; i < string.length; i++) {
		slicesString.push(string.slice(i));
	}
	return slicesString;
}*/



console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}
