/**
 * Input: a string that represents a full class name
 *
 * Returns: an array of separate words that makes up the class after removing 'class' and class name
 */ 

// Access modifiers: public, protected, and private
// Modifier requiring override: abstract
// Modifier restricting to one instance: static
// Modifier prohibiting value modification: final
// Modifier forcing strict floating point behavior: strictfp
// Annotations

// Define module to be exported as a function(s)
var modifiersNames = new Array();
module.exports = {
	classModifiersExtract: function(text) {
		// have to end before text, removing anything behind text 
		modifiersNames = text.split(" ");
		return modifiersNames;
	}
};