
/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var wrench = require('wrench');
util = require('util');

app.get('/', function(req, res){
	res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');

