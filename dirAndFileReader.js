
/* 
	Module: inputReader.js, directoryScanner.js (included)
	Description: Basic file reader returns string of contents of a file from a set file name
	Needs to be done: Add key listener to allow for a dynamic file name
 */
 
// Declare node.js module dependencies from API
var fs = require('fs'), 
	wrench = require('wrench'),
	util = require('util')

	var rootfolder = './node_modules/';
	var filteredfiles = [];
	var files = [];
	var fileextension = '.java';
	// var tempStr ='';
	var contents = [];
	
// Define module to be exported as a function(s)
module.exports = {
	dirRead: function() {
		files = wrench.readdirSyncRecursive(rootfolder)
		for (var i = 0; i<files.length; i++) { 
			if (files[i].indexOf(fileextension) != -1) { 
			    // tempStr = files[i];
				// tempStr = tempStr.substring(tempStr, tempStr.indexOf("node"), tempStr.length);
				// files[i] = tempStr;
				filteredfiles.push(files[i]);
			}
		}
		return filteredfiles;
	},

	fileRead: function() {
		// Call synchronous fileSystem function readFileSync on file name
		for(i = 0; i<filteredfiles.length; i++) {
			var temp = fs.readFileSync(rootfolder + filteredfiles[i].toString(), 'utf8')
			contents.push(temp);
		}
		return contents;
	}
};
