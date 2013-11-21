// Access modifiers: public, protected, and private
// Modifier requiring override: abstract
// Modifier restricting to one instance: static
// Modifier prohibiting value modification: final
// Modifier forcing strict floating point behavior: strictfp
// Annotations

// Define module to be exported as a function(s)
var modifiersNames = new Array();
var modifiers = '';
module.exports = {
	classModifiersExtract: function(text) {
		modifiers = text.substring(0, text.indexOf('class'));
		modifiersNames = modifiers.split(" ");
		modifiersNames.pop();
		return modifiersNames;
	}
};