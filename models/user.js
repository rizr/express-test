var mongoose = require('mongoose');
var userScheme = mongoose.Schema({
  email: String,
  password: String
});

mongoose.model('User', userScheme);