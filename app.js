
// Declare node.js module dependencies from API
var express = require('express'), 
	fs = require('fs');

// Declare module dependencies
var inputReader = require('./inputReader.js');
var directoryScanner = require('./directoryScanner.js');

// Create a new application app with express()
var app = express();

// Define a new route for app for module inputReader
app.get('/inputReader', function(req, res) {
	res.send(inputReader.fileRead());
});

// Define a new route for app for module directoryScanner
app.get('/directoryScanner', function(req, res) {
	res.send(directoryScanner.scanDir());
});

// Bind and listen to connections
app.listen(3000);
console.log('Listening on port 3000');
