/**
 * Input: a text file that represents a class
 *
 * Returns...classArray(class, class, class...)
 * class(className, parent, interface(s), lines of code, number of loops, modifiers, methodArray, variableArray, authors)
 * methodArray(methodName, modifiers, lines of code, number of loops)
 * variables(variableName, constructor, modifiers)
 *
 */
 
 // Declare module dependencies
var classReader = require('./classReader.js')

 // Define module to be exported as a function parser(text)
module.exports = {
	parser: function(text) {
		// output returned by parser
		// classArray returned by classReader
		var classArray = new Array();
		// index set to 0 to start parsing at first position for each file
		var index = 0;
		classArray = classReader.classReader(text, index);
		console.log('class returned');
		return classArray;
}
};
