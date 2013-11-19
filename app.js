
/* 
	Module: app.js
	Description: Main js class where all modules are ran from
 */

// Declare node.js module dependencies (from npmjs.org)
var express = require('express'), 
	fs = require('fs'), 
	stylus = require('stylus'), 
	nib = require('nib'),
	http = require('http'),
	THREE = require('three');

// Declare module dependencies (functions we made)
var reader = require('./dirAndFileReader.js'),
	parser = require('./parser.js'),
	planetData = require('./fakeData.json'),
	visualization = require('./visualization.js');

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
// Define a new route for app for displaying reader results
app.get('/reader', function(req, res) {
	res.send(reader.fileRead(filePaths))
});

// Throw parser results into variable
var show = parser.parser();
// Define a new route for app for displaying parser results
app.get('/parser', function(req, res) {
	res.send(show)
});
 
// Define a new route for app for displaying visualization
// Still buggy; does not work fully
app.get('/visualization.html', function(req, res) {

	//Set up scene and camera
	width = 1980;
	height = 1020;

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
	camera.position.set(0,-40,160);
	camera.up = new THREE.Vector3(0,0,1);
	camera.lookAt(new THREE.Vector3(0.3,2,2));

	//Set up renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);

	res.send(visualization.drawMultipleSunsAndPlanets(3, 4, 8, 4))
	res.send(visualization.keyboardListener())
	res.send(visualization.animate())
}); 

// Bind and listen to connections
app.listen(3000);
console.log('Listening on port 3000');
