/**
 * Input: a string that represents class name
 *
 * Returns: an array of interface(s)
 */ 
 
var spos = 0;
var epos = 0;
var interfaces = '';
var interfaceNames = new Array();

// Define module to be exported as a function(s)
module.exports = {
	// find the word implements and every interface(s) that follows it by splitting by ',' (if any) 
	classInterfaceExtract: function(text) {
			spos = text.indexOf('implements') + 11;
			epos = text.length;
			interfaces = text.substring(spos, epos);
			interfaceNames = interfaces.split(",");
			for (var i=0;i<interfaceNames.length;i++){
				interfaceNames[i] = interfaceNames[i].trim();
				}
			return interfaceNames;
	}
};