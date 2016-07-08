var express = require('express');
var passport = require('passport');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

router.post('/signin', (req, res) => {
  passport.authenticate('local', function (error, user, info) {
    if (!error && !info) {
      jwt.sign({id: user._id}, '123', {expiresIn: '24h'}, function (err, token) {
        return res.json({
          error: false,
          message: info,
          data: user,
          token: token
        });
      });
    }else
      res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
      return res.json({
        error: false,
        message: info,
        data: user
      });
  })(req, res);

});

router.post('/signup', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  new User({
    email: email,
    password: bcrypt.hashSync(password, salt)
  })
    .save((error, user) => {
      user = user.toObject();
      delete user.password;
      jwt.sign({id: user._id}, '123', {expiresIn: '24h'}, function (err, token) {
        return res.json({
          error: false,
          message: 'created',
          data: user,
          token: token
        });
      });
    });
});

module.exports = router;