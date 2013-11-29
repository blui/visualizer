/**
 * Input: a string that represents class name text
 *
 * Returns: parent name of class
 */ 

var spos = 0;
var epos = 0;
var parentName = '';
var text ='';

module.exports = {
	classParentExtract: function(className) {
			text = className;
			// starts from after the word extends
			spos = text.indexOf('extends') + 8;
			// if there is interfaces after the extending to parent, the ending of parent would be a " "
			if(text.indexOf('implements') != -1){
			epos = text.indexOf(' ', spos);
			}
			else{
			// if no interfaces following, ending would just be the end of the text
			epos = text.length;
			}
			parentName = text.substring(spos, epos);
			return parentName;
	}
};