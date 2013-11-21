 // Declare module dependencies
var methodReader = require('./methodReader.js')
var classParentExtract = require('./classParentExtract.js')
var classInterfaceExtract = require('./classInterfaceExtract.js')
var lineCounter = require('./lineCounter.js')
var loopCounter = require('./loopCounter.js')
var classModifiersExtract = require('./classModifiersExtract.js')

// Variables Initiations
var sposC = 0;
var eposC = 0;
var sposA = 0;
var eposA = 0;
var classArray = new Array();
var methodArray = new Array();
var variableArray = new Array();
var className = '';
var parent = '';
var authorName = '';
var interfaceNames = new Array();
var view = '';
var tempString = '';
var numberOfLines = 0;
var numberOfLoops = 0;
var modifiers = new Array();
var classEnd = 0;
var tempA = new Array();
// Define module to be exported as a function(s)
module.exports = {
	classReader: function(text, index) {
			if(text.indexOf('class') != -1){
					numberOfLines = lineCounter.lineCounter(text);
					numberOfLoops = loopCounter.loopCounter(text);
					sposC = text.indexOf('public', index);
					//search for "{" for end position
					eposC = text.indexOf('{', index);
					className = text.substring(sposC, eposC);
						if(className.indexOf('extends') != -1){	
							tempString = className;						
							parent = classParentExtract.classParentExtract(tempString);
							parent = parent.trim();
							}
						if(text.indexOf('implements') != -1){
							tempString = className;
							interfaceNames = classInterfaceExtract.classInterfaceExtract(tempString);
							}	
					modifiers = classModifiersExtract.classModifiersExtract(className);
					if (className.indexOf(' ', className.indexOf('class') + 6) < className.indexOf('{', className.indexOf('class') + 6) ){
						classEnd = className.indexOf('{', className.indexOf('class') + 6);
						}
					if (className.indexOf(' ', className.indexOf('class') + 6) > className.indexOf('{', className.indexOf('class') + 6) ){
						classEnd = className.indexOf(' ', className.indexOf('class') + 6);
						}
					className = className.substring(className.indexOf('class') + 6, classEnd);
					className = className.trim();
					classArray.push(className);
					index = eposC;
					classArray.push(parent);		
					classArray.push(interfaceNames);
					//classArray.push(classArray);	
					classArray.push(numberOfLines);
					classArray.push(numberOfLoops);
					classArray.push(modifiers);
					methodArray = methodReader.methodReader(text, index);
					variableArray = methodArray.pop();
					classArray.push(methodArray);
					classArray.push(variableArray);											
		}
			while(text.indexOf('author', eposA) != -1){
				sposA = text.indexOf('author', eposA);	
				eposA = sposA + 50;				
				authorName = text.substring(sposA+7, eposA);
				tempA = authorName.split(/\r\n|\r|\n/);
				authorName = tempA[0];
				classArray.push(authorName);
				eposA = sposA + 8;
				}
				return classArray;
	}
};
