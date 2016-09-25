console.log('It lives!');

var Flickr = require("flickrapi")
var flickrOptions = require('./config');
var exec = require('child_process').exec;

var cmd = '"C:\\Processing\\processing-3.2.1\\processing-java" --sketch=C:\\flickrbot\\Processing_flickrbot --run';
exec (cmd, processing);

function processing() {
    Flickr.authenticate(flickrOptions, function(error, flickr) {

    var uploadOptions = {
      photos: [{
        title: "But is it art?",
        tags: [
          "generative",
          "art",
          "processing",
          "abstract"
          ],
        is_public: 0,
        content_type: 2,
        description: "This is the description",
        photo: "C:\\flickrbot\\Processing_flickrbot\\output.png"
      }]
    };
    Flickr.upload(uploadOptions, flickrOptions, function(err, result) {
      if(err) {
        return console.error(error);
      }
      console.log("photos uploaded", result);
    });
  });
}
