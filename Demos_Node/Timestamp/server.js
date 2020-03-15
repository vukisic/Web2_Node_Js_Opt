// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp/:date_string?', function(req, res) {
  const param = isNaN(Number(req.params.date_string))
    ? req.params.date_string
    : Number(req.params.date_string);
  const date = typeof param !== 'undefined' ? new Date(param) : new Date();

  if (date !== 'Invalid Date') {
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  } else {
    res.json({ unix: null, utc: 'Invalid Date' });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
