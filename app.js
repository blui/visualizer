
// Declare node.js module dependencies from API
var express = require('express'), 
	fs = require('fs'), 
	stylus = require('stylus'), 
	nib = require('nib'),
	http = require('http'),
	three = require('three')

// Declare module dependencies
var inputReader = require('./inputReader.js')
var directoryScanner = require('./directoryScanner.js')
var parser = require('./parser.js')
var planetData = require('./fakeData.json')

// Create a new application app with express()
var app = express()

// Declare the use of Jade and Stylus
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

// Setting the views directory
// Declaring we are using the engine Jade to pump out views
// Declaring the use of middleware Stylus
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

// Declare a base route for Jade to display view contents
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

// Define a new route for app for module inputReader
app.get('/inputReader', function(req, res) {
	res.send(inputReader.fileRead())
});

// Define a new route for app for module directoryScanner
app.get('/directoryScanner', function(req, res) {
	res.send(directoryScanner.scanDir())
});

// Throw paser's results into a var
var show = parser.parser();
// Define a new route for app for module parser
app.get('/parser', function(req, res) {
	res.send(show)
});

console.log(planetData)



// Bind and listen to connections
app.listen(3000)
console.log('Listening on port 3000')

// Further testing needed
http.createServer(function(req, res){
    fs.readFile('planetPage.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8000);