var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var Todo = require('./models/todo');
var router = require('./routes')(app, Todo);
var port = process.env.PORT || 8085;

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    console.log("Connected to mongod server");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

var server = app.listen(port, function() {
    console.log('Express server start port : ' + port);
});
mongoose.connect('mongodb://192.168.3.25/TodoList');


