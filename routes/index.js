var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({error: null, message: null, data: 'Express'});
});


module.exports = router;
