 
/**
 * API dependencies
 */
var express = require('express');
var app = express();
fs = require('fs');

/**
 * Module dependencies
 */
var inputReader = require('./inputReader.js');
var data = inputReader.contentsOfFile();
console.log(data.toString());

/*
 * Set up localhost with port 3000
 */
//app.listen(3000);
//console.log('Listening on port 3000');	//Notify on runtime which port is used
