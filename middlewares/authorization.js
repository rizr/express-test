var passport = require('passport');


module.exports = {
  Auth(req, res, next) {
    passport.authenticate('jwt', (error, user, info) => {
      if (user) {
        req.user = user;
        return next();
      } else {
        return res.jsonp({
          error: true,
          message: info.message
        });
      }
    })(req, res);
  }
};