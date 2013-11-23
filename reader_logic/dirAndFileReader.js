
/**
 * dirAndFileReade module exported.
 *
 * Authors: Brian Lui, Miki Gataric
 *
 * Returns 2 functions; dirRead and fileRead
 * 	dirRead: Given a parameter rootfolder, returns an array of files filtered (.java)
 *	         within rootfolder formatted with full paths.
 *	fileRead: Given a formatted path of files, returns an array of file contents
 *			  formatted as strings of text
 */
 
/*
 * Define module dependencies (node/npm)	
 */
var fs = require('fs'), 
	wrench = require('wrench'),
	util = require('util');

/* 
 * Declare global variables for functions' use
 */
	var rootfolder = './filesToParse/',
		filteredfiles = new Array(),
		files = new Array(),
		fileextension = '.java',
		contents = new Array();
		index = 0;

/* 
 * Define functions to be exported as a module
 * 		dirRead() function
 * 		fileRead() function
 */
module.exports = {
	dirRead: function() {
		// Traverse through subdirectories of rootfolder recursively
		files = wrench.readdirSyncRecursive(rootfolder)
		for (var i = 0; i<files.length; i++) { 
			// Filters files by extension user wants (.java)
			if (files[i].indexOf(fileextension) != -1) { 
				// Push .java file-paths onto array
				filteredfiles.push(files[i]);
			}
		}
		// Returns array of filteredfiles with formatted paths
		return filteredfiles;
	},

	fileRead: function() {
		// Loop over all contents of filteredfiles (reads all files user needs)
		for(i = 0; i<filteredfiles.length; i++) {
			// Read file contents synchronously; parameter as formatted file-path
			var temp = fs.readFileSync(rootfolder + filteredfiles[i].toString(), 'utf8')
			// Push contents of files into array
			contents.push(temp);
			// Used for debugging; indicates files read during process
			console.log('File: ' + rootfolder + filteredfiles[i].toString() + ' read.')
		}
		// Returns array containing contents of files
		return contents;
	}
};
