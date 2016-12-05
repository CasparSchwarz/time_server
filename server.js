var http = require('http')

var server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.end("<?php include ("time.php"); ?>");
});
server.listen(10, function(){
  console.log("Server running at http://localhost;10");
})
