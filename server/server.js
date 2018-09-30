//server/server.js

var express = require('express');
// var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');

var router = require('./routes/routes.js');
var connectionString = require('./secrets')
var Comment  = require('./models/blog');

var API_PORT = process.env.API_PORT || 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

mongoose.connect(connectionString, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', router);
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
module.exports=app;
