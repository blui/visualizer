var walk    = require('walk'), filter;
var files   = [];
var i = 0;
var filematches = 0;
var fileextension = '.html';
var foldername = 'node_modules';
var filter = {
    followLinks: false, 
  };
var walker  = walk.walkSync(foldername, filter);

walker.on('file', function(root, stat, next) {
	files.push(stat.name);
	if (files[i].indexOf(fileextension) != -1)
	{
		console.log(files[i]);
		next();
		i++;
		filesmatches++;
	}
	else
	{
		next();
		i++;
	}
	console.log('Number of matching files: ' + filematches + " and number of items in the array: " + files.length)
	return files;
});
