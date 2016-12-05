var http = require('http');
var fs = require('fs');



function onRequest(request, response){
  console.log("A user made a request" + request.url);
  response.end("Hallo Pisser");
}

function onRequest(request, response){
  if(request.method == 'GET' && request.url == '/'){
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./index.html").pipe(response);
  }
}

http.createServer(onRequest).listen(80);
console.log("Server is running");
