var http = require('http');

function onRequest(request, response){
  console.log("A user made a request" + request.url);
  response.end("Hallo Pisser");
}

http.createServer(onRequest).listen(80);
console.log("Server is running");
