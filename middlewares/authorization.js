var passport = require('passport');

module.exports = {
  Auth(req, res, next) {
    console.log(1);
    passport.authenticate('jwt', (error, user, info) => {
      console.log(error, user);
      if (user) {
        req.user = user;
        next()
      }
    });
  }
};