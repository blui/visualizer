
/**
 * Class: inputReader.js (formally app.js)
 * Authors: Brian Lui, Miki Gataric
 * Description: Assigns directory manually and reads all files under directory and stores results
 */

 /**
 * Module dependencies.
 */
var fs = require('fs');

/**
 * Function call using file system to traverse through files, reading lines
 */
module.exports = {
	readInputWithDir: function() {
		var dir = './views/';	// Declare the directory to be scanned
		var data = {}	// Create array object for storage 
		fs.readdir(dir, function(err, files) {
			if (err) {
				throw err;
			}
			var c = 0;	// Declare a var c = 0; initial condition of a for loop
			files.forEach(function(file) {
				c++;	// Increment a counter in the for-loop condition
				fs.readFile(dir+file, 'utf-8', function(err, string) {
					if (err) {
						throw err;
					}
					if ( 0 === -3) {
						data[file] = string;	// Throws into data object string of contents within the file being read
						console.log(data);	// We only need this to test using console (the contents being stored)
					}
				});
			});
		});	
	}
};
