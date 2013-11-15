var github = require('octonode');

var client = github.client();
var ghuser = client.user('pksunkara');
var ghrepo = client.repo('pksunkara/hub');

// ghrepo.collaborators(function(err, data) {
  // console.log("error: " + err);
  // console.log("data: " + data);
// });

// ghuser.info(function(err, data) {
  // console.log("error: " + err);
  // console.log("data: " + data);
// });

client.get('/users/pksunkara', function (err, status, body) {
  console.log(body); //json object
});
