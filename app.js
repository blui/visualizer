
// Declare node.js module dependencies from API
var express = require('express'), 
	fs = require('fs');

// Declare module dependencies
var inputReader = require('./inputReader.js');

// Create a new application app with express()
var app = express();

app.get('/inputReader', function(req, res){
  res.send(inputReader.fileRead());
});

// Bind and listen to connections
app.listen(3000);
console.log('Listening on port 3000');	//Notify on runtime which port is used
