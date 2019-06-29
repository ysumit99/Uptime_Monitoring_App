/* Primary API file for the project */

//Dependencies

var http = require("http");

//server should respond to all the strings
var server = http.createServer(function(req, res) {
  res.end("Hello World!");
});

//Start the server,It should listen on some port
server.listen(3000, function() {
  console.log("This server is listening on port 3000!");
});
