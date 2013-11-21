// Define module to be exported as a function(s)

var lines = new Array();
var numberOfLines =0;

module.exports = {
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
