//models/Blog.js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var blogSchema = new Schema({
  id: Number,
  title: String,
  content: String,
}, { timestamps: true });
module.exports = mongoose.model('Blog', blogSchema);
