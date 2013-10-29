
/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var wrench = require('wrench'), util = require('util'), fs = require('fs');

/**
 * Function call using file system to traverse through files, reading lines
 */

var dir='./views/';	// Declare the directory to be scanned
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
			data[file] = string;	// Throws into data object string of contents within the file being read
			//console.log(data);	// We only need this to test using console (the contents being stored)
		});
	});
});	

/*
 * Function from express framework to pump out contents stored in 'data'
 */
app.get('/', function(req, res){
	res.send(data);
});

// wrench.readdirSyncRecursive('routes');

// var f = new wrench.LineReader('*');
// while(f.hasNextLine()) {
   // util.puts(f.getNextLine());
// }

// var files = [];
// wrench.readdirRecursive('routes', function(error, curFiles) {
	// util.puts(curFiles);
// });


	// for (var i = 0; i<curFiles.length; i++)
	// {
		// var f = new wrench.LineReader(curFiles[i].toString());		
		// while(f.hasNextLine()) 
		// {
			// util.puts(f.getNextLine());
		// }
	// }
				
app.listen(3000);
console.log('Listening on port 3000');
