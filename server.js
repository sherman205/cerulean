// Get dependencies 
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const http = require('http');

// Get API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

// Angular DIST output folder
app.use(express.static('dist/cerulean'));

// Set API  routes
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/cerulean/index.html');
});

const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);

// // Connect to the database
// const url = 'mongodb://localhost:27017/cerulean';

// var db;
// mongoose.connect(url, function (err, client) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

//   // Save database object from the callback for reuse.
//   db = client.db();
//   console.log("Database connection ready");

//   // Initialize the app.
//   var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("Blog server now running on port", port);
//   });
// });

server.listen(port, () => console.log(`API running on localhost:${port}`));
