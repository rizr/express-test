module.exports = (app) => {
  var mongoose = require('mongoose');
  var config = app.get('config');

  mongoose.connect(config.development.db, {server: {auto_reconnect: true}});
};