/**
 * Input: a string that represents class name
 *
 * Returns: an array of interface(s)
 */ 

// starting ending positions for index
var spos = 0;
var epos = 0;
var interfaces = '';
var interfaceNames = new Array();

// Define module to be exported as a function(s)
module.exports = {
	// find the word 'implements' and every interface(s) that follows it by splitting by ',' (if any) 
	classInterfaceExtract: function(text) {
			// indexOf will start at i, we need to start past 'implements' to grab the actual interfaces
			spos = text.indexOf('implements') + 11;
			// interfaces should come at the end, get text.length to find end position
			epos = text.length;
			interfaces = text.substring(spos, epos);
			//split by ',' if there is more than one interfaces
			interfaceNames = interfaces.split(",");
			for (var i=0;i<interfaceNames.length;i++){
				//trim each inferfaces to avoid the extra spaces, especially for interfaces not in same line level
				interfaceNames[i] = interfaceNames[i].trim();
				}
			return interfaceNames;
	}
};