//server/routes/routes.js
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
// var Blog = require('./models/Blog');

router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = router;
