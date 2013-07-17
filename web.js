var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var indx = fs.readFileSync("index.html");
var buf = new Buffer(indx);
var content = buf.toString();

app.get('/', function(request, response) {
  response.send(content);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
