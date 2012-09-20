var http = require('http');
var mime = require('mime');
var fs = require('fs');

var server = http.createServer(function(req, resp) {
	var filePath = buildFilePath(req);
	fs.exists(filePath, function(exists) {
		if(exists) {
			fs.readFile(filePath, sendStatic);
		} else {
			send404(resp);
		}
	});

	function buildFilePath(req) {
		var url = req.url;
		if(url == '/') {
			return './public/index.html';
		} else {
			return './public' + url;
		}
	}

	function sendStatic(err, data) {
		var mimeType = mime.lookup(filePath);
		resp.writeHead('content-type', mimeType);
		resp.end(data);
	}
});

server.listen(3000, function() {
	console.log('server start');
});

function send404(resp) {
	resp.writeHead(404, {
		'content-type': 'text/plain'
	});
	resp.end('404');
}