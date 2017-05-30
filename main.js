#!/usr/bin/env nodejs
var http = require('http');
var port = (3001);

var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('main.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(port);

console.log("Server listening on port " + port);