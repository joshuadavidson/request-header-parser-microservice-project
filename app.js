const express = require('express');
const app = express();
const port = process.env.PORT || 3000; //set the port to server port or 3000 for local testing

const useragent = require('useragent'); //get useragent package to parse useragent header
useragent(true);//update useragent with the current RegEx library

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
    res.json({
    ip: req.ip,
    lang: req.acceptsLanguages()[0],
    os: useragent.parse(req.headers['user-agent']).os.toJSON().family
  });
});

app.listen(port);
