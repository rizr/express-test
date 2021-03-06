module.exports = (app) => {

  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var JWTStrategy = require('passport-jwt').Strategy;
  var FacebookStrategy = require('passport-facebook-token').Strategy;
  var bcrypt = require('bcrypt');

  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
      session: false
    },
    (req, email, password, done) => {
      User
        .findOne({email: email})
        .lean()
        .then(user => {
          if (!user) return done(null, {}, 'User not found');
          if (bcrypt.compareSync(password, user.password)) return done(null, user, null);
        })
        .catch(done);
    }));

  passport.use(new JWTStrategy(
    {
      jwtFromRequest: require('passport-jwt').ExtractJwt.fromHeader('authorization'),
      secretOrKey: '123',
      ignoreExpiration: true,
      session: false,
      passReqToCallback: true
    },
    (req, payload, done) => {
      console.log(payload);
      User
        .findOne({_id: payload.id})
        .lean()
        .then(user => {
          if (!user) return done(null, null, 'User not found');
          return done(null, user, null);
        })
        .catch(done);
    }));
};