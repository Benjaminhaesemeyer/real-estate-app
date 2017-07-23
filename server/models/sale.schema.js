var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var saleSchema = new Schema({
  cost: {type: Number},
  sqft: {type: Number},
  city: {type: String}
});

// export our model
module.exports = mongoose.model('Sale', saleSchema, 'listings');
