 // Declare module dependencies
var methodModifiersExtract = require('./methodModifiersExtract.js')

var methodArray = new Array();	
var method = new Array();	
var variableArray = new Array();
var variable = new Array();		
var parentArray = new Array();	
var childArray = new Array();	
// contents of methodArray
var methodName = '';
// contents of variableArray
var variableName = '';				
var variableConstructor ='';
var sposM = 0;
var eposM = 0;
var index = 0;
var modifiers = new Array();
var modifiersV = new Array();

// Define module to be exported as a function(s)
module.exports = {
	methodReader: function(text, i) {
			methodArray = new Array();
			index = i;
			while(text.indexOf('public', index) != -1){
				method = new Array();
				variable = new Array();
				index = text.indexOf('public', index);
				if (text.indexOf('(', text.indexOf('public', index)) > text.indexOf(';', text.indexOf('public', index))){
				sposM = text.indexOf('public', index);
				eposM = text.indexOf(';', sposM);
				variableName = text.substring(sposM, eposM);
				modifiersV = methodModifiersExtract.methodModifiersExtract(variableName);	
				variableName = modifiersV.pop();
				variable.push(variableName);
				variableConstructor = modifiersV.pop();
				variable.push(variableConstructor);
				variable.push(modifiersV);
				variableArray.push(variable);
				index = eposM + 1;
				}
				else if (text.indexOf('(', text.indexOf('public', index)) < text.indexOf(';', text.indexOf('public', index))){
				sposM = text.indexOf('public', index);
				eposM = text.indexOf('(', sposM);
				methodName = text.substring(sposM, eposM);
				modifiers = methodModifiersExtract.methodModifiersExtract(methodName);	
				methodName = modifiers.pop();
				method.push(methodName);
				method.push(modifiers);
				methodArray.push(method);			
				index = eposM + 1;
				}
			}	
			index = i;		
			while(text.indexOf('private', index) != -1){
				method = new Array();
				variable = new Array();				
				index = text.indexOf('private', index);
				if (text.indexOf('(', text.indexOf('private', index)) > text.indexOf(';', text.indexOf('private', index))){
				sposM = text.indexOf('private', index);
				eposM = text.indexOf(';', sposM);
				variableName = text.substring(sposM, eposM);
				modifiersV = methodModifiersExtract.methodModifiersExtract(variableName);	
				variableName = modifiersV.pop();
				variable.push(variableName);
				variableConstructor = modifiersV.pop();
				variable.push(variableConstructor);
				variable.push(modifiersV);
				variableArray.push(variable);
				index = eposM + 1;
				}
				else if (text.indexOf('(', text.indexOf('private', index)) < text.indexOf(';', text.indexOf('private', index))){
				sposM = text.indexOf('private', index);
				eposM = text.indexOf('(', sposM);
				methodName = text.substring(sposM, eposM);
				modifiers = methodModifiersExtract.methodModifiersExtract(methodName);	
				methodName = modifiers.pop();				
				method.push(methodName);
				method.push(modifiers);
				methodArray.push(method);	
				index = eposM + 1;
				}
			}
			index = i;		
			while(text.indexOf('protected', index) != -1){
				method = new Array();
				variable = new Array();
				index = text.indexOf('protected', index);
				if (text.indexOf('(', text.indexOf('protected', index)) > text.indexOf(';', text.indexOf('protected', index))){
				sposM = text.indexOf('protected', index);
				eposM = text.indexOf(';', sposM);
				variableName = text.substring(sposM, eposM);
				modifiersV = methodModifiersExtract.methodModifiersExtract(variableName);	
				variableName = modifiersV.pop();
				variable.push(variableName);
				variableConstructor = modifiersV.pop();
				variable.push(variableConstructor);
				variable.push(modifiersV);
				variableArray.push(variable);
				index = eposM + 1;
				}
				else if (text.indexOf('(', text.indexOf('protected', index)) < text.indexOf(';', text.indexOf('protected', index))){
				sposM = text.indexOf('protected', index);
				eposM = text.indexOf('(', sposM);
				methodName = text.substring(sposM, eposM);
				modifiers = methodModifiersExtract.methodModifiersExtract(methodName);	
				methodName = modifiers.pop();				
				method.push(methodName);
				method.push(modifiers);
				methodArray.push(method);	
				index = eposM + 1;
				}
			}			
			methodArray.push(variableArray);			
			return methodArray;		
			}
};