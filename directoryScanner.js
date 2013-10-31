var walk    = require('walk'), fs = require('fs'), filter;
var files   = [];
var counter = 0;
var i = 0;

var filter = {
    followLinks: false, 
	filters: ['lib']
  };

var walker  = walk.walk('./jitsi-master', filter);

walker.on('file', function(root, stat, next) {
    files.push(root + '/' + stat.name);
	console.log(files[i]);
	next();
	i++;
	counter++;
	console.log('The total number of files is: ' + counter + " and the number of items in the array is: " + files.length)
});