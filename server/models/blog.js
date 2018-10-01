// models/blog.js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var blogSchema = new Schema({
  title: String,
  content: String,
}, { timestamps: true });
module.exports = mongoose.model('Blog', blogSchema);
