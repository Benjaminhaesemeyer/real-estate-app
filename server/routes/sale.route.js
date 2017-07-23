var express = require('express');
var router = express.Router();
var listings = require('../models/sale.schema.js');

router.get('/', function(req, res) {
  // find (select) all documents in our listing collection
  listings.find({}, function(err, data) {
    console.log('inside sale get route');
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);

    }
  });
});


module.exports = router;
