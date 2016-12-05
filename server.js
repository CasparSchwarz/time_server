const http=require('http');

const hostname='localhost';
const port=3000;

const server=http.createServer((req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Everything is alright\n');
});


server.listen(port, hostname, function(){
  console.log("Server running at http://${hostname}:${port}/");
});
