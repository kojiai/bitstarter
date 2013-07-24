var express = require('express');
var app = express();
app.use(express.logger());
var content = fs.readFileSync("index.html");

var buffer = new Buffer(content, 'utf-8'); 


app.get('/', function(request, response) {
  response.send(buffer);
});




var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
