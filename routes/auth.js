var express = require('express');
var passport = require('passport');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
  passport.authenticate('local', function (error, user, info) {

    if (error || info)
      return res.jsonp({
        error: true,
        message: info.message
      });
    else
      return res.jsonp({
        error: false,
        message: info.message,
        data: user,
        token: null
      });


  })(req, res);

});

module.exports = router;