var walk    = require('walk'), filter;
var files   = [];
var counter = 0;
var i = 0;

var filter = {
    followLinks: false, 
	filters: ['lib']
  };

var walker  = walk.walkSync('node_modules', filter);

walker.on('file', function(root, stat, next) {
	files.push(stat.name);
	if (files[i] == 'view.js')
	{
		console.log(files[i]);
		next();
		i++;
		counter++;
	}
	else
	{
		next();
		i++;
	}
	console.log('Number of matching files: ' + counter + " and number of items in the array: " + files.length)
});
