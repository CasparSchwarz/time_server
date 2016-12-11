var express = require('express');
var app = express();

var now = new Date();
var jsonDate = now.toJSON();

app.get('/', function (req, res) {
  var responseText='Date: ' + jsonDate;
  res.send(responseText);
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
})
