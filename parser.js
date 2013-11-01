/**
 * PROPOSED format of INPUTs, they should be array containing arrays/texts
 *
 * THIS IS INPUT for hierarchy View 
 * Array initializations. 
 * Returns...hierarchyArray(classArrays)
 * Inside classArray(classname, methodArray, variableArray, class type, parent of classes, child classes)
 * methodArray and variableArray are just list of method names/variables
 
 * TODO: 
 need to find a way to deal with comments
 need to allow different types of class/methods besides Public
 need to deal with two classes in one file
 *
 */

 // Define module to be exported as a function fileRead()
module.exports = {
	parser: function() {
 
 
/**
 * Dependencies and Variables Initiation.
 */

var express = require('express');
var app = express();
var wrench = require('wrench'), util = require('util');
var fs = require('fs');
//directory of static files
var dir='./routes/';
var hierarchyArray = new Array();
var classArray = new Array();
var className = '';
var methodArray = new Array();	
var methodName = '';
var variableArray = new Array();	
var variableName = '';
var classtype = '';
var parentArray = new Array();	
var childArray = new Array();	
var variableArray = new Array();
	
fs.readdir(dir, function(err, files) {
		 //throws exception
		 if (err) throw err;
		 //counter
		 var c = 0;
		 files.forEach(function(file) {
			c++;
			var text = fs.readFileSync(dir+file,'utf8')
			/* Declare local variables */
			var sposC = 0;
			var eposC = 0;
			var index = 0;
			/* Iterate through the file that's been converted to string
			 *  See if class exists, if so grabs class name
			 */  
			 
			if(text.indexOf('class') != -1){
				sposC = text.indexOf('class', index);
				    // TODO - need to add extend/implement later
					if(text.indexOf('extends') != -1){
					}
					if(text.indexOf('implements') != -1){
					}					
				eposC = text.indexOf('{');
				className = text.substring(sposC, eposC);
				classArray.push(className);
				index = eposC;
			}
	
			/* Declare local variables 
			 * counters for start and end positions 
			 */			
			var sposM = 0;
			var eposM = 0;
			
			/*  search within class file... 
			 */				
			while(text.indexOf('public', index) != -1){
				/*  looks for public variables
				 *  TODO: extend to all types of variables
				 */	
				if (text.indexOf('(', text.indexOf('public', index)) > text.indexOf(';', text.indexOf('public', index))){
				sposM = text.indexOf('public', index);
				eposM = text.indexOf(';', sposM);
				variableName = text.substring(sposM, eposM);
				variableArray.push(variableName);
				index = eposM + 1;
				}
				/*  looks for public methods
				 *  TODO: extend to all types of methods
				 */	
				else if (text.indexOf('(', text.indexOf('public', index)) < text.indexOf(';', text.indexOf('public', index))){
				sposM = text.indexOf('public', index);
				eposM = text.indexOf('(', sposM);
				methodName = text.substring(sposM, eposM);
				methodArray.push(methodName);
				index = eposM + 1;
				}
				else {
				hierarchyArray.push('error in parsing');
				}
			}			
			classArray.push(methodArray);
			classArray.push(variableArray);			
			hierarchyArray.push(classArray);

		});
 });
 
return hierarchyArray;

}
};
