
/**
 * app runs all modules supported
 *
 * Authors: Brian Lui, Tommy Chien
 *
 * When run, app is able to integrate dirAndFileReader and parser
 * modules together to produce files that are scanned, then parsed
 */
 
/*
 * Define module dependencies (node/npm)
 */
var express = require('express');

/*
 * Define module dependencies created by us
 */
var reader = require('./reader_logic/dirAndFileReader.js');
var parser = require('./parser_logic/parser.js');

/* 
 * Instantiate the application
 */
var app = express();


// ------------------- dirAndFileReader logic ------------------------

// Store contents of read directory (and subdirectories) with formatted 
// file paths into array filePaths
var filePaths = reader.dirRead();
// Store contents of files read into array filesReaded 
var filesReaded = reader.fileRead(filePaths);
// To check contents of files, display them in a new route from app 
app.get('/reader', function(req, res) {
	res.send(filesReaded);
});


// ------------------- parser logic ----------------------------------

// Create: - arrayAllParsed: array to store contents of all parsed files 
// 		   - singleParsed: temp. place-holder for single file's parsed output
//         - singleFile: temp. place-holder for singleFile's content
var arrayAllParsed = new Array(),
	singleParsed,
	singleFile;
// Use a loop to traverse through an array of file contents to parse
// entries one by one
for(var i = 0; i < filesReaded.length; i++) {
	// Place-holder for contents of file i
	singleFile = filesReaded[i];
	// Place-holder for contents of parsed file i
	singleParsed = parser.parser(singleFile);
	// Throw parsed contents of file i to arrayAllParsed
	arrayAllParsed.push(singleParsed);
	// De-bugging purposes to indicate files are actually being parsed
	console.log('File #: ' + i + ' parsed.');
}

// Define a new route for app for displaying reader results
app.get('/parser', function(req, res) {
	res.send(arrayAllParsed);
});


// ------------------- export .json file ------------------------------
// Create: - .json file physically on local directory
function createFile() {
	var fileOutput = new ActiveXObject("Scripting.FileSystemObject");
	var s = fso.CreateTextFile("parsedData.json", true);
	s.WriteLine(arrayAllParsed.toString());
	console.log('File created');
	s.Close();
}

// Bind and listen to connections
app.listen(3000);
console.log('Listening on port 3000');
