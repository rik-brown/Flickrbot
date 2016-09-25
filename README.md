# flickrbot
Simple Bot for posting Processing image files to a Flickr account (inspired by Dan Shiffman's excellent  <a href="https://www.youtube.com/playlist?list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV">twitterbot tutorial</a>).

This is a bot built to run in node.js using the handy <a href="https://github.com/Pomax/node-flickrapi">flickrapi package</a>.
(Tip: Be sure to read <a href="https://github.com/Pomax/node-flickrapi#an-example-of-a-first-run">this part</a> of the readme before trying to authenticate for the first time!)

It assumes that full authentication data is aquired from Flickr using the relevant procedure <a href="https://www.flickr.com/services/api/auth.oauth.html">(more info here)</a>.

More details on uploading images to Flickr <a href="https://www.flickr.com/services/api/upload.api.html">can be found here</a>.

The cellendipity flickrbot is running on an Amazon EC2 server and posting to <a href="https://www.flickr.com/photos/144469250@N07/">this account</a>.
