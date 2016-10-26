var http = require('http');
var unirest = require('unirest');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  unirest.get("https://simple-weather.p.mashape.com/weather?lat=11.0168&lng=76.9558")
.header("X-Mashape-Key", "Ri4j5gX4ORmshweHbjBSUUMevXWIp1i0xRujsnjCz7wW9w5zLB")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
  res.end(result.body);
});
}).listen(8200);
console.log('Server listening on port 8200');