//server/routes/routes.js
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Blog  = require('../models/Blog');

router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.get('/blogs', (req, res) => {
  Blog.find((err, blogs) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: blogs });
  });
});

router.post('/blogs', (req, res) => {
  const blog = new Blog();
  // body parser lets us use the req.body
  const { title, content } = req.body;
  if (!title || !content) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'You must provide a title and content'
    });
  }
  blog.title = title;
  blog.content = content;
  blog.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

module.exports = router;
