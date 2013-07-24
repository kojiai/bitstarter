var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());
var buff = new Buffer(fs.readFileSync("index.html"));

var content = buff.toString() 


app.get('/', function(request, response) {
  response.send(content);
});




var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
