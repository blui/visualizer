/**
 * PROPOSED format of INPUTs, they should be array containing arrays/texts
 *
 * Returns...hierarchyArray(classArray, classArray, classArray...)
 * classArray(className, parent, interface(s), lines of code, number of loops, modifiers, methodArray, variableArray, authors)
 * methodArray(methodName, modifiers)
 * variables(variableName, constructor, modifiers)
 */
 
 // Declare module dependencies
var classReader = require('./classReader.js')

 // Define module to be exported as a function fileRead()
module.exports = {
	parser: function(text) {
		// output returned by parser
		var hierarchyArray = new Array();
		// classArray returned by classReader
		var classArray = new Array();
		// files being parsed
		// contents of classArray
		var index = 0;
		classArray = classReader.classReader(text, index);
		hierarchyArray.push(classArray);
		return hierarchyArray;

}
};
