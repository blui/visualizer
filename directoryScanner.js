var walk    = require('walk'), filter;
var files   = [];
var matches = 0;
var i = 0;
var filename = 'view.js';
var foldername = 'node_modules';
var filter = {
    followLinks: false, 
  };

var walker  = walk.walkSync(foldername, filter);

walker.on('file', function(root, stat, next) {
	files.push(stat.name);
	if (files[i].substring() == "js")
	{
		console.log(files[i]);
		next();
		i++;
		matches++;
	}
	else
	{
		next();
		i++;
	}
	console.log('Number of matching files: ' + matches + " and number of items in the array: " + files.length)
	return files;
});
