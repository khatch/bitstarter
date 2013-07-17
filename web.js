var express = require('express');

var app = express.createServer(express.logger());

var indx = fs.readFileSync('index.html');
var buf = new Buffer(256);
buf.toString(indx);

app.get('/', function(request, response) {
  response.send(buf);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
