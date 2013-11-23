/**
 * Input: a text file that represents a class
 *
 * Returns: methodArray(methodName, modifiers, lines of code, number of loops, variables)
 * FYI variables(variableName, constructor, modifiers)
 */ 

// Declare module dependencies
var methodModifiersExtract = require('./methodModifiersExtract.js')
var lineCounter = require('./lineCounter.js')
var methodEnd = require('./methodEnd.js')
var loopCounter = require('./loopCounter.js')

// the array being returned:
// methodArray(methodName, modifiers, lines of code, number of loops, variable array)
// variables(variableName, constructor, modifiers)
var methodArray = new Array();	// method arrays
var method = new Array(); // method objects
var variableArray = new Array(); // variable array 
var variable = new Array();	// variable objects
var methodName = ''; // method name - one word, not full name with public static etc
var variableName = '';	// variable name		
var variableConstructor =''; // variable constructor eg int, string, boolean
var sposM = 0; // starting position of method name
var eposM = 0; // ending positino of method name
var index = 0; //index of current position
var modifiers = new Array(); // method modifiers array - holds each separate word of full method name
var modifiersV = new Array(); // variable modifiers array - holds each separate word of full variable name
var endMethodNumber = 0; // index position of end of method
var numberOfLines = 0; // number of lines in method
var numberOfLoops = 0; // number of loops in method

// Define module to be exported as a function(s)
module.exports = {
	methodReader: function(text, i) {
		//clear the array to new method
		methodArray = new Array();
		index = i;
		//finds all the public methods or variables first
		while(text.indexOf('public', index) != -1){
			method = new Array();
			variable = new Array();
			index = text.indexOf('public', index);
			// if there are both public methods and variables left to parse
			if (text.indexOf('(', index) != -1 && text.indexOf(';', index) != -1){
				//checks if it's a method or variable by checking if ; or ( is closer to 'public'
				if (text.indexOf('(', text.indexOf('public', index)) > text.indexOf(';', text.indexOf('public', index))){
					// sets the starting and ending points for the whole line of variable
					sposM = text.indexOf('public', index);
					eposM = text.indexOf(';', sposM);
					// extracts the line with variable in it eg: public abstract int num;
					variableName = text.substring(sposM, eposM);
					// checks if a variable is populated on declaration, checks for '='
					if(variableName.indexOf('=') != -1){
						variableName = variableName.substring(0, variableName.indexOf('='));
					}
					// extracts the modifiers into separate words public, abstract, int, num
					modifiersV = methodModifiersExtract.methodModifiersExtract(variableName);	
					// grabs the last item of modifers which is the variable name : num, then remove from modifiers
					variableName = modifiersV.pop();
					variable.push(variableName);
					// grabs the second last modifiers which is the constructor: int, then remove from modifiers
					variableConstructor = modifiersV.pop();
					variable.push(variableConstructor);
					// throws the rest of the modifiers in 
					variable.push(modifiersV);
					variableArray.push(variable);
					//index set to the end of current variable
					index = eposM + 1;
					}
				else if(text.indexOf('(', text.indexOf('public', index)) < text.indexOf(';', text.indexOf('public', index))){
					// sets the starting and ending points for the whole line of method
					sposM = text.indexOf('public', index);
					eposM = text.indexOf('(', sposM);
					// extracts the line with variable in it eg: public abstract static findMax;
					methodName = text.substring(sposM, eposM);
					// extracts the modifiers, including method name, into separate words public, abstract, static, findMax
					modifiers = methodModifiersExtract.methodModifiersExtract(methodName);	
					// grabs last item of modifiers, the name of method - findMax then remove from modifiers
					methodName = modifiers.pop();
					method.push(methodName);
					// throws the rest of the modifiers in 				
					method.push(modifiers);
					methodArray.push(method);	
					//index set to the end of current variable				
					index = eposM + 1;
					// finds index of the end of the method
					endMethodNumber = methodEnd.methodEnd(text, index);
					// finds number of lines in method
					numberOfLines = lineCounter.lineCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLines);
					// finds number of loops in method
					numberOfLoops = loopCounter.loopCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLoops);	
				}
			}
			// if there is only public methods left to parse
			else if (text.indexOf('(', index) != -1) {
					// sets the starting and ending points for the whole line of method
					sposM = text.indexOf('public', index);
					eposM = text.indexOf('(', sposM);
					// extracts the line with variable in it eg: public abstract static findMax;
					methodName = text.substring(sposM, eposM);
					// extracts the modifiers, including method name, into separate words public, abstract, static, findMax
					modifiers = methodModifiersExtract.methodModifiersExtract(methodName);	
					// grabs last item of modifiers, the name of method - findMax then remove from modifiers
					methodName = modifiers.pop();
					method.push(methodName);
					// throws the rest of the modifiers in 				
					method.push(modifiers);
					methodArray.push(method);	
					//index set to the end of current variable				
					index = eposM + 2;
					// finds index of the end of the method
					endMethodNumber = methodEnd.methodEnd(text, index);
					// finds number of lines in method
					numberOfLines = lineCounter.lineCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLines);
					// finds number of loops in method
					numberOfLoops = loopCounter.loopCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLoops);
			}
			// if there is only public variables left to parse
			else if(text.indexOf(';', index) != -1){
					// sets the starting and ending points for the whole line of variable
					sposM = text.indexOf('public', 0);
					eposM = text.indexOf(';', sposM);
					// extracts the line with variable in it eg: public abstract int num;
					variableName = text.substring(sposM, eposM);
					// checks if a variable is populated on declaration, checks for '='					
					if(variableName.indexOf('=') != -1){
						variableName = variableName.substring(0, variableName.indexOf('='));
					}
					// extracts the modifiers into separate words public, abstract, int, num
					modifiersV = methodModifiersExtract.methodModifiersExtract(variableName);
					// grabs the last item of modifers which is the variable name : num, then remove from modifiers
					variableName = modifiersV.pop();
					variable.push(variableName);
					// grabs the second last modifiers which is the constructor: int, then remove from modifiers
					variableConstructor = modifiersV.pop();
					variable.push(variableConstructor);
					// throws the rest of the modifiers in 
					variable.push(modifiersV);
					variableArray.push(variable);
					//index set to the end of current variable
					index = eposM + 1;
			}
		}
		index = i;
		//finds all the private methods or variables first
		while(text.indexOf('private', index) != -1){
			method = new Array();
			variable = new Array();
			index = text.indexOf('private', index);
			// if there is both private method and variables left ot parse
			if (text.indexOf('(', index) != -1 && text.indexOf(';', index) != -1){
				//checks if it's a method or variable by checking if ; or ( is closer to 'private'
				if (text.indexOf('(', text.indexOf('private', index)) > text.indexOf(';', text.indexOf('private', index))){
					// sets the starting and ending points for the whole line of variable
					sposM = text.indexOf('private', index);
					eposM = text.indexOf(';', sposM);
					// extracts the line with variable in it eg: private abstract int num;
					variableName = text.substring(sposM, eposM);
					// checks if a variable is populated on declaration, checks for '='
					if(variableName.indexOf('=') != -1){
						variableName = variableName.substring(0, variableName.indexOf('='));
					}					
					// extracts the modifiers into separate words private, abstract, int, num
					modifiersV = methodModifiersExtract.methodModifiersExtract(variableName);	
					// grabs the last item of modifers which is the variable name : num, then remove from modifiers
					variableName = modifiersV.pop();
					variable.push(variableName);
					// grabs the second last modifiers which is the constructor: int, then remove from modifiers
					variableConstructor = modifiersV.pop();
					variable.push(variableConstructor);
					// throws the rest of the modifiers in 
					variable.push(modifiersV);
					variableArray.push(variable);
					//index set to the end of current variable
					index = eposM + 1;
					}
				// if next private method is closer than private variable, parse private method first
				else if(text.indexOf('(', text.indexOf('private', index)) < text.indexOf(';', text.indexOf('private', index))){
					// sets the starting and ending points for the whole line of method
					sposM = text.indexOf('private', index);
					eposM = text.indexOf('(', sposM);
					// extracts the line with variable in it eg: private abstract static findMax;
					methodName = text.substring(sposM, eposM);
					// extracts the modifiers, including method name, into separate words private, abstract, static, findMax
					modifiers = methodModifiersExtract.methodModifiersExtract(methodName);	
					// grabs last item of modifiers, the name of method - findMax then remove from modifiers
					methodName = modifiers.pop();
					method.push(methodName);
					// throws the rest of the modifiers in 				
					method.push(modifiers);
					methodArray.push(method);	
					//index set to the end of current variable				
					index = eposM + 1;
					// finds index of the end of the method
					endMethodNumber = methodEnd.methodEnd(text, index);
					// finds number of lines in method
					numberOfLines = lineCounter.lineCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLines);
					// finds number of loops in method
					numberOfLoops = loopCounter.loopCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLoops);	
				}
			}
			// has just private methods to parse
			else if (text.indexOf('(', index) != -1) {
					// sets the starting and ending points for the whole line of method
					sposM = text.indexOf('private', index);
					eposM = text.indexOf('(', sposM);
					// extracts the line with variable in it eg: private abstract static findMax;
					methodName = text.substring(sposM, eposM);
					// extracts the modifiers, including method name, into separate words private, abstract, static, findMax
					modifiers = methodModifiersExtract.methodModifiersExtract(methodName);	
					// grabs last item of modifiers, the name of method - findMax then remove from modifiers
					methodName = modifiers.pop();
					method.push(methodName);
					// throws the rest of the modifiers in 				
					method.push(modifiers);
					methodArray.push(method);	
					//index set to the end of current variable				
					index = eposM + 2;
					// finds index of the end of the method
					endMethodNumber = methodEnd.methodEnd(text, index);
					// finds number of lines in method
					numberOfLines = lineCounter.lineCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLines);
					// finds number of loops in method
					numberOfLoops = loopCounter.loopCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLoops);
			}
			// has just private variables to parse
			else if(text.indexOf(';', index) != -1){
					// sets the starting and ending points for the whole line of variable
					sposM = text.indexOf('private', 0);
					eposM = text.indexOf(';', sposM);
					// extracts the line with variable in it eg: private abstract int num;
					variableName = text.substring(sposM, eposM);
					if(variableName.indexOf('=') != -1){
						variableName = variableName.substring(0, variableName.indexOf('='));
					}
					// extracts the modifiers into separate words private, abstract, int, num
					modifiersV = methodModifiersExtract.methodModifiersExtract(variableName);
					// grabs the last item of modifers which is the variable name : num, then remove from modifiers
					variableName = modifiersV.pop();
					variable.push(variableName);
					// grabs the second last modifiers which is the constructor: int, then remove from modifiers
					variableConstructor = modifiersV.pop();
					variable.push(variableConstructor);
					// throws the rest of the modifiers in 
					variable.push(modifiersV);
					variableArray.push(variable);
					//index set to the end of current variable
					index = eposM + 1;
			}
		}
		index = i;
		//finds all the protected methods or variables first
		while(text.indexOf('protected', index) != -1){
			method = new Array();
			variable = new Array();
			index = text.indexOf('protected', index);
			// has both protected methods and variables left in class
			if (text.indexOf('(', index) != -1 && text.indexOf(';', index) != -1){
				//checks if it's a method or variable by checking if ; or ( is closer to 'protected'
				if (text.indexOf('(', text.indexOf('protected', index)) > text.indexOf(';', text.indexOf('protected', index))){
					// sets the starting and ending points for the whole line of variable
					sposM = text.indexOf('protected', index);
					eposM = text.indexOf(';', sposM);
					// extracts the line with variable in it eg: protected abstract int num;
					variableName = text.substring(sposM, eposM);
					// checks if a variable is populated on declaration, checks for '='
					if(variableName.indexOf('=') != -1){
						variableName = variableName.substring(0, variableName.indexOf('='));
					}
					// extracts the modifiers into separate words protected, abstract, int, num
					modifiersV = methodModifiersExtract.methodModifiersExtract(variableName);	
					// grabs the last item of modifers which is the variable name : num, then remove from modifiers
					variableName = modifiersV.pop();
					variable.push(variableName);
					// grabs the second last modifiers which is the constructor: int, then remove from modifiers
					variableConstructor = modifiersV.pop();
					variable.push(variableConstructor);
					// throws the rest of the modifiers in 
					variable.push(modifiersV);
					variableArray.push(variable);
					//index set to the end of current variable
					index = eposM + 1;
					}
				// if next protected method is closer than protected variable, parse as method 
				else if(text.indexOf('(', text.indexOf('protected', index)) < text.indexOf(';', text.indexOf('protected', index))){
					// sets the starting and ending points for the whole line of method
					sposM = text.indexOf('protected', index);
					eposM = text.indexOf('(', sposM);
					// extracts the line with variable in it eg: protected abstract static findMax;
					methodName = text.substring(sposM, eposM);
					// extracts the modifiers, including method name, into separate words protected, abstract, static, findMax
					modifiers = methodModifiersExtract.methodModifiersExtract(methodName);	
					// grabs last item of modifiers, the name of method - findMax then remove from modifiers
					methodName = modifiers.pop();
					method.push(methodName);
					// throws the rest of the modifiers in 				
					method.push(modifiers);
					methodArray.push(method);	
					//index set to the end of current variable				
					index = eposM + 1;
					// finds index of the end of the method
					endMethodNumber = methodEnd.methodEnd(text, index);
					// finds number of lines in method
					numberOfLines = lineCounter.lineCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLines);
					// finds number of loops in method
					numberOfLoops = loopCounter.loopCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLoops);	
				}
			}
			// has just protected methods to search
			else if (text.indexOf('(', index) != -1) {
					// sets the starting and ending points for the whole line of method
					sposM = text.indexOf('protected', index);
					eposM = text.indexOf('(', sposM);
					// extracts the line with variable in it eg: protected abstract static findMax;
					methodName = text.substring(sposM, eposM);
					// extracts the modifiers, including method name, into separate words protected, abstract, static, findMax
					modifiers = methodModifiersExtract.methodModifiersExtract(methodName);	
					// grabs last item of modifiers, the name of method - findMax then remove from modifiers
					methodName = modifiers.pop();
					method.push(methodName);
					// throws the rest of the modifiers in 				
					method.push(modifiers);
					methodArray.push(method);	
					//index set to the end of current variable				
					index = eposM + 2;
					// finds index of the end of the method
					endMethodNumber = methodEnd.methodEnd(text, index);
					// finds number of lines in method
					numberOfLines = lineCounter.lineCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLines);
					// finds number of loops in method
					numberOfLoops = loopCounter.loopCounter(text.substring(text.indexOf('{', eposM), endMethodNumber));
					methodArray.push(numberOfLoops);
			}
			// has just protected variables left to search
			else if(text.indexOf(';', index) != -1){
					// sets the starting and ending points for the whole line of variable
					sposM = text.indexOf('protected', 0);
					eposM = text.indexOf(';', sposM);
					// extracts the line with variable in it eg: protected abstract int num;
					variableName = text.substring(sposM, eposM);					
					if(variableName.indexOf('=') != -1){
						variableName = variableName.substring(0, variableName.indexOf('='));
					}
					// extracts the modifiers into separate words protected, abstract, int, num
					modifiersV = methodModifiersExtract.methodModifiersExtract(variableName);
					// grabs the last item of modifers which is the variable name : num, then remove from modifiers
					variableName = modifiersV.pop();
					variable.push(variableName);
					// grabs the second last modifiers which is the constructor: int, then remove from modifiers
					variableConstructor = modifiersV.pop();
					variable.push(variableConstructor);
					// throws the rest of the modifiers in 
					variable.push(modifiersV);
					variableArray.push(variable);
					//index set to the end of current variable
					index = eposM + 1;
			}
		}		
		methodArray.push(variableArray);
		return methodArray;		
		}
};