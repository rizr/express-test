var passport = require('passport');

module.exports = {
  Auth(req, res, next) {
    passport.authenticate('jwt', (error, user) => {
      if (user) {
        req.user = user;
        return next();
      } else {
        return res.json({
          error: error
        });
      }
    })(req, res);
  }
};