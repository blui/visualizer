// Define module to be exported as a function(s)

var whileLoops = new Array();
var forLoops = new Array();
var numberOfLoops = 0;

module.exports = {
	loopCounter: function(text) {
			var whileLoops = text.split('while(');
				if (whileLoops == null) {
				}
				if (whileLoops != null) {
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
