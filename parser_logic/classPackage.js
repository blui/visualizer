/**
 * Input: a string that represents class text
 *
 * Returns: package name of class
 */ 

var spos = 0; // starting and ending positions
var epos = 0;
var packageName = '';
var tempText ='';
// Define module to be exported as a function(s)
module.exports = {
	classPackage: function(text) {
			tempText = text;
			// searches for package name starting from after the word package and ending in the first ";" found
			spos = tempText.indexOf('package') + 8;
			epos = tempText.indexOf(';', spos);
			packageName = tempText.substring(spos, epos);
			return packageName;		
	}
};
