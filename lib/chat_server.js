var socketio = require('socket.io');
var count = 0;
exports.listen = function(server) {
	io = socketio.listen(server);
	io.set('log level', 1);

	io.sockets.on('connection', function(socket) {
		console.log('socket connection established!');
		io.sockets.emit('id', {
			'id' : 'Pansa' + (++count)
		});
	});
};