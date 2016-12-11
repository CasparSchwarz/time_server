var express = require('express');
var app = express();

var requestTime = function (req, res, next){
  req.requestTime = Date.now();
  next();
}

app.use(requestTime);

app.get('/', function (req, res) {
  var responseText='Date: ';
  responseText += req.requestTime + '';
  res.send(responseText);
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
})
