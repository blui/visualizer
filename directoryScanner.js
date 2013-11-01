
/* 
	Module: directoryScanner.js
	Description: Basic directory reader returns string of contents of a directory from a set directory name
	Needs to be done: Add key listener to allow for a dynamic directory name
					  Add filters to be able to scan directories selectively; ex. dir #1, dir #3 but not dir #2
 */

// Declare node.js module dependencies from API
var wrench = require('wrench');

var rootfolder = './node_modules';
var filteredfiles = [];
var files = [];
var fileextension = '.html';

function directoryScan(rootdirectory){
	files = wrench.readdirSyncRecursive(rootdirectory)
	for (var i = 0; i<files.length; i++)
	{
		if (files[i].indexOf(fileextension) != -1)
		{
			filteredfiles.push(files[i]);
		}
	}
	return filteredfiles;
};

console.log(directoryScan(rootfolder));

