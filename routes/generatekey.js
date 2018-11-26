var express = require('express');
var router = express.Router();
var mongoose = require("../bin/mongo");
var apiSchema = new mongoose.Schema({
  'key': String,
  'created': Date,
  'lastUsed': Date
})
var api = mongoose.model('api', apiSchema, 'api-keys'); 


/* GET a new API Key */
router.get('/', function(req, res, next) {

  let d = new Date();
  const date = d; 

  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);

    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });

  var newApi = new api({ key: uuid , created: date , lastUsed: '' }); 

  newApi.save(function (err, book) {
    if (err) return console.error(err);
    res.render( "generatekey" , {value: uuid});
  }); 


});

module.exports = router;