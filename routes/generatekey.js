var express = require('express');
var router = express.Router();

/* GET a new API Key */
router.get('/', function(req, res, next) {

  var d = new Date().getTime();

  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });

  res.render('generatekey', { value: uuid });

});

module.exports = router;

