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

module.exports = {
	methodModifiersExtract: function(text) {
		modifiersNames = text.split(" ");
		return modifiersNames;
	}
};