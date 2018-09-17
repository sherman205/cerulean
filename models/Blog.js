//models/Blog.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
  id: Number,
  title: String,
  content: String,
});
module.exports = mongoose.model('Blog', blogSchema);

mongodb://<dbuser>:<dbpassword>@ds251287.mlab.com:51287/cerulean