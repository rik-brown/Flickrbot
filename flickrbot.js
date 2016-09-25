console.log('It lives!');

var Flickr = require("flickrapi")
var flickrOptions = require('./config');
var exec = require('child_process').exec;

postFlickr();
// Interval: 24 hours
// 1000 milliseconds * 60 seconds * 60 minutes * 24 hours
setInterval(postFlickr, 1000*60*60*24);


function postFlickr() {

  var cmd = 'Processing_flickrbot/Processing_flickrbot';
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
          photo: "Processing_flickrbot/output.png"
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
}
