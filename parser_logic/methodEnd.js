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
		// counter, each { adds 1, each } minuses 1
		var j = 0;
		// loop will continue as long as there is a '}' to mark end of method
		while(text.indexOf('}', index) != -1){
			// if the next bracket is { then counter adds 1
			if (text.indexOf('{', index) > text.indexOf('}', index)){
				index = text.indexOf('{', index) + 2;
				j ++;
				}
			else{
			// if the next bracket is } then counter loses 1
				index = text.indexOf('}', index) + 2;			
				j--;
				}
			// if counter is negative, means } for method has been reached
			if (j < 0) {
				return index;
			}
		}
	}
};
