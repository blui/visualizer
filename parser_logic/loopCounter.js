/**
 * Input: a string that represents method text
 *
 * Returns: an int of number of loops
 */ 
var whileLoops = new Array();
var forLoops = new Array();
var numberOfLoops = 0;

// Define module to be exported as a function(s)
module.exports = {
	loopCounter: function(text) {
		// splits the text by the keyword 'while('or 'for(' - there could be many other cases such as 'while (' 
		// but the code base follows a standard of having ( right behind while and for
		// number of splits - 1 is the number of loops
			var whileLoops = text.split('while(');
				if (whileLoops == null) {
				}
				if (whileLoops != null) {
				// minus one because you are splitting down the middle, always one extra element 
				numberOfLoops = numberOfLoops + whileLoops.length -1;
				}		
			var forLoops = text.split('for(');
				if (forLoops == null) {
				forLoops = 0;					
				}
				if (forLoops != null) {
				numberOfLoops = numberOfLoops + forLoops.length -1;
				}
			return numberOfLoops;
	}
};
