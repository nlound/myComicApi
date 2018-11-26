var express = require('express');
var router = express.Router();

var mongoose = require("../bin/mongo");

var apiSchema = new mongoose.Schema({
  'key': String,
  'date': String
});

var apiList = mongoose.model('api-keys', apiSchema);

/* GET API keys listing. */
router.get('/', function(req, res, next) {

  apiList.find({ } ,'key', (err, results) => {
    res.send(results);
  } );
});

module.exports = router;