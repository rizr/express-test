var express = require('express');
var router = express.Router();
//var utils = require('../middlewares/authorization');
/* GET users listing. */
router.get('/' /*utils.Auth*/, function (req, res) {
  console.log(req.user);
  res.send('respond with a resource');
});

module.exports = router;
