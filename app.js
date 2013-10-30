
/**
 * Class: app.js
 * Authors: Brian Lui, Miki Gataric
 * Description: Serves as the main class to run; should have dependencies linked between all classes
 */
 
/**
 * Module dependencies.
 */
var express = require('express');
var app = express();
var wrench = require('wrench'), util = require('util'), fs = require('fs');

/**
 * Declare dependency with other classes
 */
var inputReader = require('./inputReader.js');

module.exports = {
	performTest: function() {
		consolelog(inputReader.readInputWithDir());
	}
}

/*
 * Set up localhost with port 3000
 */
app.listen(3000);
console.log('Listening on port 3000');	//Notify on runtime which port is used
