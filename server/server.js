//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var API_PORT = process.env.API_PORT || 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
// app.set('views', path.join(__dirname, '../client'));
// app.use(express.static(path.join(__dirname, '../client')));
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
// mongoose.connect('mongodb://test:macbook1@ds251287.mlab.com:51287/cerulean');
app.use('/api', router);
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
module.exports=app;
