/**
 * Input: a text file that represents a class
 *
 * Returns: class( string className, string parent, array interface(s), int lines of code, int number of loops, array modifiers, methodArray, variableArray, authors)
 *
 */ 
 
// Declare module dependencies
var methodReader = require('./methodReader.js')  
var classParentExtract = require('./classParentExtract.js')
var classInterfaceExtract = require('./classInterfaceExtract.js')
var lineCounter = require('./lineCounter.js')
var loopCounter = require('./loopCounter.js')
var classModifiersExtract = require('./classModifiersExtract.js')

// Variables Initiations
var sposC = 0; //start position for class
var eposC = 0; //end position for class
var sposA = 0; //start position for class
var eposA = 0; //end position for class
var classArray = new Array(); // the array that's being returned
var className = ''; // name of class
var parent = ''; // name of parent if it exists
var interfaceNames = new Array(); // name of interface(s) if they exists
var numberOfLines = 0; // number of lines for class
var numberOfLoops = 0; // number of loops for class
var modifiers = new Array(); // modifiers in an array if they exists eg: public, abstract
var methodArray = new Array(); // array of method and its information
var variableArray = new Array(); // array of variable and its information
var authorName = ''; // author(s) name of class it commented

var classEnd = 0; // used to mark end of class index
var tempA = new Array(); // temp array used
var tempString = '';  // temp string used
var tempString2 = '';  // temp string used
var tempString3 = ''; // tempstring used

var tempInt = 0; // temp number used
var tempInt2 = 0; // temp number used
var tempInt3 = 0; // temp number used
var tempInt4 = 0; // temp number used
var authorNames = new Array(); // array of author names

// Define module to be exported as a function
module.exports = {
	classReader: function(text, index) {
			
			// checks java file to make sure it's a class
			if(text.indexOf('class') != -1){
				
				// searches for author in class files, it's denoted by @author: in the comments by the developers
				while(text.indexOf('author', eposA) != -1){
						sposA = text.indexOf('author', eposA);
						eposA = sposA + 50;				
						authorName = text.substring(sposA+7, eposA);
						tempA = new Array();
						tempA = authorName.split(/\r\n|\r|\n/);
						authorName = tempA[0];
						authorNames.push(authorName);
						eposA = sposA + 8;
				}
				
				// this loop removes the comments from the code to not interfere with the rest of the parsing
				// also this gives a more acurate line and loop count
				var j = 0;
				
				// searches for the beginings of comments
				while (text.match('//*') || text.match('//')) {
					// if match found - record the start and end positions
					if (text.match('//*')) { 
						var sposC = text.indexOf('/*');
						var eposC = text.indexOf('*/') + 2; }
					else {
						var sposC = text.indexOf('//');
						var eposC = text.indexOf('/n');
						}
					// store string in temp variable, replace the comments back into text
					tempString3 = text.substring(sposC, eposC);
					text = text.replace(tempString3, '');		
				}
				
				//counts the number of lines and loops of code without the comments
				numberOfLines = lineCounter.lineCounter(text);
				numberOfLoops = loopCounter.loopCounter(text);
				
				// search for start position of class name (looks for public, private or protected)
				// checks which index is smaller between public, private, protected, start at the smallest index
				// to determine the starting position of the class name				
				if(text.indexOf('public') != -1){
				tempInt = text.indexOf('public', index);
				}
				else{
				// if public, private or protected exists, their index is recorded otherwise it'll default to 99999 for not existing
				tmepInt = 99999;
				}
				if(text.indexOf('private') != -1){
				tempInt2 = text.indexOf('private', index);
				}
				else{
				tempInt2 = 99999;
				}
				if(text.indexOf('protected') != -1){
				tempInt3 = text.indexOf('protected', index);
				}
				else{
				tempInt3 = 99999;
				}
				
				// the smallest index of public, private and protected marks the start of the full class name
				sposC = Math.min(tempInt, tempInt2, tempInt3);
				
				//search for "{" for end position of class name
				eposC = text.indexOf('{', index);
				
				// substrings the class name and its modifiers so we separate it's classes, parent and interface(s)
				className = text.substring(sposC, eposC);
				
				// if it has modifiers, extract it 
				// checks to see if it has a parent, if so extract it
				if(className.indexOf('extends') != -1){	
					parent = classParentExtract.classParentExtract(className);
					parent = parent.trim();
					}
				
				// checks to see if it has interfaces, if so extract it
				if(text.indexOf('implements') != -1){
					interfaceNames = classInterfaceExtract.classInterfaceExtract(className);
					className = className.substring(0, text.indexOf('implements'));
				}	
				
				// finds the class name's ending index, just before "{"
				if (className.indexOf(' ', className.indexOf('class') + 6) < className.indexOf('{', className.indexOf('class') + 6) ){
					classEnd = className.indexOf('{', className.indexOf('class') + 6);
					}
				if (className.indexOf(' ', className.indexOf('class') + 6) > className.indexOf('{', className.indexOf('class') + 6) ){
					classEnd = className.indexOf(' ', className.indexOf('class') + 6);
					}
				
				// breaks the full class name into array elements by dividing between empty spaces ' '
				modifiers = classModifiersExtract.classModifiersExtract(className);	
				
				// finds the index of class then add one to find the index of the class name 
				// eg public abstract class className, index of class is 3, className is 4
				className = modifiers[modifiers.indexOf('class')+1];
				
				// find the length of the array containing each word of full class name
				// remove the elements at class and beyond, we only want modifiers in front of class 
				// eg. public static abstract final class className extends parent implement inferface -> public static abstract final
				tempInt4 = modifiers.length - modifiers.indexOf('class');	
				for(var i = 0; i< tempInt4;i++){
					modifiers.pop();
				}				
				
				// pushes the class information(className, parent, interfaces etc) into classArray to return
				classArray.push(className);
				classArray.push(parent);		
				classArray.push(interfaceNames);
				classArray.push(numberOfLines);
				classArray.push(numberOfLoops);
				classArray.push(modifiers);
				index = eposC + 5;
				
				// feeds in the class text and the index where to start parsing for methods after class name 
				if (text.indexOf('public', index) != -1 || text.indexOf('private', index) != -1 || text.indexOf('protected', index) != -1){
					text = text.substring(index, text.length);
					methodArray = methodReader.methodReader(text, 0);
				}
				else{
				methodArray = null;
				}
				
				// variable array is populated in methodReader and is stored as it's last element
				if (methodArray == null){
				}
				else{
				variableArray = methodArray.pop();				
				}
				// push in method and its info, variable and its info and author(s)
				classArray.push(methodArray);
				classArray.push(variableArray);
				classArray.push(authorName);				
		}
				// return accumulated information
				return classArray;
	}
};
