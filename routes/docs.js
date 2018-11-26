var express = require('express');
var router = express.Router();
var vars = require('./../vars');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('docs', { title: vars.appName, section: 'Documentation' });
});

module.exports = router;
