express = require 'express'
routes = require './routes'
user = require './routes/user'
http = require 'http'
path = require 'path'

app = express()

app.configure ->
	app.set 'port', process.env.PORT || 3000
	app.set 'views', __dirname + '/views'
	app.set 'view engine', 'ejs'
	app.use express.favicon()
	app.use express.logger 'dev'
	app.use express.bodyParser()
	app.use express.methodOverride()
	app.use app.router
	app.use require('less-middleware')({ src: __dirname + '/public' })
	app.use express.static path.join __dirname, 'public'
	return

app.configure 'development', -> app.use express.errorHandler()
app.get '/', routes.index

server = http.createServer app
server.listen app.get('port'), -> console.log 'Express start on port '+app.get 'port'