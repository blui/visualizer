/**
 * Input: a string that represents class text, the index of start of method
 *
 * Returns: an int of the index of the end of method
 */ 

// Define module to be exported as a function(s)
module.exports = {
	methodEnd: function(text, i) {
		// counts the number of { and }, the momemt there is more } than { is the place where method ends
		var index = i;
		var j = 0;
		while(text.indexOf('}', index) != -1){
			if (text.indexOf('{', index) > text.indexOf('}', index)){
				index = text.indexOf('{', index) + 2;
				j ++;
				}
			else{
				index = text.indexOf('}', index) + 2;			
				j--;
				}
			if (j < 0) {
				return index;
			}
		}
	}
};
