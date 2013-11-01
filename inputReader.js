
/* 
	Module: inputReader.js
	Description: Basic file reader returns string of contents of a file from a set file name
	Needs to be done: Add key listener to allow for a dynamic file name
 */
 
// Declare node.js module dependencies from API
var fs = require('fs');

// Define module to be exported as a function(s)
module.exports = {
	fileRead: function() {
		// Call synchronous fileSystem function readFile on file name
		var text = fs.readFileSync('./simpleParser.js', 'utf8');
		return text;
	}
};
