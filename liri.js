var fs = require('fs');
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
const axios = require('axios');

// var spotify = new Spotify({
//   id: "68ecfa8ca8bf47c091565e1da5c4a8dd",
//   secret: "9b66766415274fbcb7ef26e1ed513292"
// });

function userCommand(userInput, userQuery) {
  switch (userInput) {
      case "do-this":
          doThis();
      case "spotify-this":
          spotifyThis(userQuery);
  }
}
 
function spotifyThis(song) {
  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(data.tracks.items[0].artists[0].name); 
  })
}

//  https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp
var artist = "Dierks Bentley";
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function (response) {
    // handle success
    // console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
 
// console.log(data.tracks.items[0].artists[0].name); 
// console.log(data.tracks.items[0].album); 
// });


// concert-this


// spotify-this-song


// movie-this
// http://www.omdbapi.com/?apikey=[yourkey]&
var movie = ["Shrek", "Shrek 2"]
console.log(movie);
for (i = 0; i < movie.length; i++) {

axios.get("http://www.omdbapi.com/?t=" + movie[i] + "&apikey=trilogy")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
// console.log(data.tracks.items[0].artists[0].name); 
//  console.log(data.tracks.items[0].album); 
// });

// // do-what-it-says

// function doThis() {
//   fs.readFile("./random.txt", "utf8", function (error, data) {
//       if (error) {
//           return console.log(error);
//       }
//       console.log(data)
//       let dataArr = data.split(",");

//       userInput = dataArr[2];
//       userQuery = dataArr[1];
//       userCommand(userInput, userQuery, process.argv[2]);
//   });
// };
// // spotifyThis("Brick House")
// userCommand(process.argv[2], process.argv[3])
// console.log(process.argv[2]);