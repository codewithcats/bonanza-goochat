var http = require('http');
var mime = require('mime');
var fs = require('fs');

var server = http.createServer(function(req, resp) {
	var filePath = './public/index.html';
	fs.readFile(filePath, function(err, data) {
		var mimeType = mime.lookup(filePath);
		resp.writeHead('content-type', mimeType);
		resp.end(data);
	});
});

server.listen(3000, function() {
	console.log('server start');
});