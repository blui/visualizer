/**
 * Input: a string that represents a full method name
 *
 * Returns: an array of separate words that makes up the method
 */ 

// Access modifiers: public, protected, and private
// Modifier restricting to one instance: static
// Modifier prohibiting value modification: final
// Modifier requiring override: abstract
// Modifier preventing reentrancy: synchronized
// Modifier indicating implementation in another programming language: native
// Modifier forcing strict floating point behavior: strictfp
// Annotations

// Define module to be exported as a function(s)
var modifiersNames = new Array();
var tempA = new Array();
var text = '';
var tempString = '';

module.exports = {
	// split method by spaces ' ' to separeate method name and modifiers
	methodModifiersExtract: function(t) {
		// remove method's extra spaces
		text = t.trim();
		tempA = new Array();
		tempString = '';
		// separate method by lines by regular expression in case they are declared with more than one line
		// trim the extra spaces of each line then combine them into one line for easier parsing
		tempA = text.split(/\r\n|\r|\n/);
		for(var i = 0; i < tempA.length; i++){
			tempA[i] = tempA[i].trim();
			tempString = tempString.concat(tempA[i]);
		}
		// split the trimmed modifiers into separate words
		modifiersNames = tempString.split(" ");
		return modifiersNames;
	}
};