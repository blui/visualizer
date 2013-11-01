
/* 
	Module: directoryScanner.js
	Description: Basic directory reader returns string of contents of a directory from a set directory name
	Needs to be done: Add key listener to allow for a dynamic directory name
					  Add filters to be able to scan directorys selectively; ex. dir #1, dir #3 but not dir #2
 */

// Declare node.js module dependencies from API
var walk = require('walk'), 
	fs = require('fs'), 
	filter;

// Declare variables	
var files = []; 
var i = 0;
var foldername = 'views';
var filter = {
	followLinks: false
};
var walker = walk.walkSync(foldername, filter);	

// Try to avoid using 'walk'
/* module.exports = {
	scanDir: function () {
		var text =  walker.on('file', function(root, stat, next) {
			files.push(stat.name);
			filteredFiles.push(stat.name);
			console.log(files[i]);
			next();
			i++;
		});
		return text;
	}
}; */

// Define module to be exported as a function(s)
module.exports = {
	scanDir: function () {
		// Call synchronous fileSystem function readdir on dir name
		var text = fs.readdirSync('./views', 'utf8');
		return text;
	}
}