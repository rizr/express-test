var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JWTStrategy = require('passport-jwt').Strategy;
var mongoose = require('mongoose');

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
        session: false
    },
    (req, email, password, done) => {
        done(null, {'sdad': 11});
    }));

passport.use(new JWTStrategy(
    {
        jwtFromRequest: require('passport-jwt').ExtractJwt.fromHeader('authorization'),
        secretOrKey: '123',
        ignoreExpiration: true,
        session: false,
        passReqToCallback: true
    }, (req, payload, done) => {
        console.log(payload);
        done(null, {'id': 1});
    }));