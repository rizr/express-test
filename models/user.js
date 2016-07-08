var mongoose = require('mongoose');

module.exports = global.User = mongoose.model('User', mongoose.Schema
  ({
      email: String,
      password: String
    },
    {
      versionKey: false
    })
);