

// Declare node.js module dependencies from API
var walk = require('walk'), 
	filter;
	
// Declare variables	
var files = [], 
	var filteredfiles = [], 
	var i = 0, 
	var fileextension = '.html', 
	var foldername = 'node_modules';
var filter = {
	followLinks: false,
};
var walker = walk.walkSync(foldername, filter);

module.exports = {
	walker.on('file', function(root, stat, next) {
		files.push(stat.name);
		if (files[i].indexOf(fileextension) != -1) { 
			filteredfiles.push(stat.name);
			console.log(files[i]);
			next();
			i++;
		}
		else { 
			next();
			i++;
		}
		console.log('Number of filtered files in array: ' + filteredfiles.length + ", Total number of files in array: " + files.length)
		return files, filteredfiles;
	});
};
