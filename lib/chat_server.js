var socketio = require('socket.io');

exports.listen = function(server) {
	io = socketio.listen(server);
	io.set('log level', 1);

	io.sockets.on('connection', function(socket) {
		console.log('socket connection established!');
		io.sockets.emit('id', {
			'id' : 'Pansa_1'
		});
	});
};