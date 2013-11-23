// Define module to be exported as a function(s)

// public class Register extends ActionSupport implements ModelDriven

var spos = 0;
var epos = 0;
var parentName = '';
var text ='';

module.exports = {
	classParentExtract: function(className) {
			text = className;
			spos = text.indexOf('extends') + 8;
			if(text.indexOf('implements') != -1){
			epos = text.indexOf(' ', spos);
			}
			else{
			epos = text.length;
			}
			parentName = text.substring(spos, epos);
			return parentName;
	}
};