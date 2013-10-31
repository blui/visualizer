
 /**
 * Module dependencies.
 */
var fs = require('fs');

module.exports = {
	contentsOfFile: function() {
		var text = fs.readFileSync('./simpleParser.js', 'utf8');
		return text;
	}
};
