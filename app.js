
/** 
	Module: app.js
	Description: Main js class where all modules run
 */

// Declare node.js module dependencies (from npmjs.org)
var express = require('express'),
	stylus = require('stylus'), 
	nib = require('nib');

// Declare module dependencies (functions we made)
var reader = require('./dirAndFileReader.js');
var parser = require('./parser.js');

// Create a new application app with express()
var app = express();

// Declare the use of Jade and Stylus
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

// Setting the views directory
// Declaring we are using the engine Jade to pump out views
// Declaring the use of middle-ware Stylus
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'));

// Declare a base route for Jade to display view contents
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

// Load directory and file reader to variable display for testing purposes
var filePaths = reader.dirRead();
var filesReaded = reader.fileRead(filePaths);
var singleFile = filesReaded[0];
var parsedFile = parser.parser(singleFile);
// Define a new route for app for displaying reader results
app.get('/reader', function(req, res) {
	res.send(parsedFile)
});

// Bind and listen to connections
app.listen(3000);
console.log('Listening on port 3000');
