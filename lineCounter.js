/**
 * Input: a string that represents class/method text
 *
 * Returns: an int of number of lines
 */ 
var lines = new Array();
var numberOfLines =0;

// Define module to be exported as a function(s)
module.exports = {
	// splits the text based on /\r\n|\r|\n/ which represents breaks between lines
	// count the number of splits to find out line number
	lineCounter: function(text) {
			var lines = text.split(/\r\n|\r|\n/);
				if (lines == null) {
				numberOfLines = 0;					
				}
				if (lines != null) {
				numberOfLines = lines.length;
				}				
			return numberOfLines;
	}
};
