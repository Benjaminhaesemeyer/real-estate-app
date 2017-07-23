var express = require('express');
var router = express.Router();
var rentals  = require('../models/rent.schema.js');

router.get('/', function(req, res) {
  // find (select) all documents in our listing collection
  rentals.find({}, function(err, data) {
    console.log('inside rent get route');
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);

    }
  });
});


module.exports = router;
