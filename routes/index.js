var express = require('express');
var passport = require('passport');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', (req, res) => {
    res.json({error: null, message: null, data: 'Express'});
});

router.get('/auth', (req, res, next) => {
    passport.authenticate('local', function (error, user, info) {
        res.setHeader('code', 200);
        return res.jsonp({
            error: null,
            message: null,
            data: user,
            token: jwt.sign({id: user.id}, '123')
        });
    })(req, res);
});

module.exports = router;
