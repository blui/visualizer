// Define module to be exported as a function(s)

// public class Register extends ActionSupport implements ModelDriven

var spos = 0;
var epos = 0;
var parentName = '';

module.exports = {
	classParentExtract: function(text) {
			spos = text.indexOf('extends') + 8;
			epos = text.indexOf(' ', spos + 9);
			parentName = text.substring(spos, epos);
			return parentName;
	}
};