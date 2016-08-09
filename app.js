const express = require('express');
const app = express();
const port = process.env.PORT || 3000; //set the port to server port or 3000 for local testing

//serve static assets from the public folder
app.use('/assets', express.static(__dirname + '/public'));

//landing page route
app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname + '/public/pages'
  }, function(err) {
    if (err) throw err;
  });

});

//route for handling parseheader requests
app.get('/parseheader', function(req, res) {
  res.send("hello!");
});

app.listen(port);
