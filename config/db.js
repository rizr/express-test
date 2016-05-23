var config = require('./config');
var mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/expresstest', {
    server: {
        auto_reconnect: true
    }
});