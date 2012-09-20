var http = require('http');
var mime = require('mime');
var fs = require('fs');

var server = http.createServer(function(req, resp) {
	var url = req.url;
	var filePath;
	if(url == '/') {
		filePath = './public/index.html';
	} else {
		filePath = './public' + url;
	}
	
	fs.exists(filePath, function(exists) {
		if(exists) {
			fs.readFile(filePath, function(err, data) {
				var mimeType = mime.lookup(filePath);
				resp.writeHead('content-type', mimeType);
				resp.end(data);
			});
		} else {
			send404(resp);
		}
	})

	
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