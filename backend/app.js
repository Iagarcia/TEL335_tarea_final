var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index.router')
var cors = require('cors')
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

const PORT = 3000;

var app = express();
app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://TEL335:1234@localhost/signin');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log('CONNECTADO A MONGODB!!!');
});

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

app.use('/api/', routes);

app.get('/', (req, res) => {
    res.json({
		"message": "Hello, World!"
	});
});

app.listen(PORT, () => {
    console.log('¡Bienvenido 🚗 🚓 🚕  !');
    console.log('Corriendo en el puerto ' + PORT);
});
