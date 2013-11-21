// Define module to be exported as a function(s)

// public class Register extends ActionSupport implements ModelDriven

var spos = 0;
var epos = 0;
var interfaces = '';
var interfaceNames = new Array();

module.exports = {
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