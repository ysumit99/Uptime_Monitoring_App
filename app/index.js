/* Primary API file for the project */

//Dependencies

var http = require("http");
var url = require("url");

//server should respond to all the strings
var server = http.createServer(function(req, res) {
  // Get the url and parse it
  var parsedUrl = url.parse(req.url, true);

  // Get the Path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");

  //Get the query String as an object
  var queryStringObj = parsedUrl.query;


  //Get the HTTP Method
  var method = req.method.toLowerCase();

  //Send the reponse
  res.end("Hello World\n");

  //Log request path
  console.log( 
    "Request received on path:" + trimmedPath + " with the method: " + method + " with these query string parameters ",queryStringObj
  );
});

//Start the server,It should listen on some port
server.listen(3000, function() {
  console.log("This server is listening on port 3000!");
});
