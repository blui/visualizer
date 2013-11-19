
/* 
	Module: inputReader.js, directoryScanner.js (included)
	Description: Basic file reader returns string of contents of a file from a set file name.
				 Path of directory must be set manually.
 */
 
// Declare node.js module dependencies from API
var fs = require('fs'), 
	wrench = require('wrench'),
	util = require('util');

// Declare global variables for functions' use
	var rootfolder = './node_modules/',
		filteredfiles = [],
		files = [],
		fileextension = '.java',
		contents = [];
	
// Define module to be exported as a functions
// dirRead function to scan directories and sub-directories for file paths and
// fileRead function to read in files given by dirRead, stored into array.
module.exports = {
	dirRead: function() {
		files = wrench.readdirSyncRecursive(rootfolder)
		for (var i = 0; i<files.length; i++) { 
			// Filters files by extension declared
			if (files[i].indexOf(fileextension) != -1) { 
				filteredfiles.push(files[i]);
			}
		}
		// Returns array of filteredfiles for use
		return filteredfiles;
	},

	fileRead: function() {
		// Call synchronous fileSystem function readFileSync on file name
		for(i = 0; i<filteredfiles.length; i++) {
			// Pass in a rootfolder and path to the specific files in a loop
			var temp = fs.readFileSync(rootfolder + filteredfiles[i].toString(), 'utf8')
			contents.push(temp);
		}
		// Returns array of contents
		return contents;
	}
};
