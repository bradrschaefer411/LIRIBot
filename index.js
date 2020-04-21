var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "68ecfa8ca8bf47c091565e1da5c4a8dd",
  secret: "9b66766415274fbcb7ef26e1ed513292"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});