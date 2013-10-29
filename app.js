
/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var wrench = require('wrench'), util = require('util');

app.get('/', function(req, res){
	res.send('Hello World');
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
	
// var fs = require('fs');

// var dir='./routes/';
// var data = {}

// fs.readdir(dir, function(err, files) {
		// if (err) throw err;
		// var c = 0;
		// files.forEach(function(file) {
			// c++;
			// fs.readFile(dir+file, 'utf-8', function(err, string) {
				// if (err) throw err;
				// data[file] = string;
				// if (0 === -- c) {
					// console.log(data);
				// }
			// });
		// });
// });		
				
app.listen(3000);
console.log('Listening on port 3000');
