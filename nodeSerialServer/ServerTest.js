/*
	Tests express and socket.io without serial

*/


var app = require('express')(),						// start Express framework
  	server = require('http').createServer(app),	// start an HTTP server
  	io = require('socket.io').listen(server);		// filter the server using socket.io

server.listen(8080);								// listen for incoming requests on the server
  
// respond to web GET requests with the index.html page:
app.get('/', function (request, response) {
  response.sendfile(__dirname + '/index.html');
});

// listen for new socket.io connections:
io.sockets.on('connection', function (socket) {
	// send something to the web client with the data:
	socket.emit('serialEvent', "Hello");
});

