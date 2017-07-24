var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// created the saleSchema
var saleSchema = new Schema({
  cost: {type: Number},
  sqft: {type: Number},
  city: {type: String}
});

// export our model
// talking with the listings collection
module.exports = mongoose.model('Sale', saleSchema, 'listings');
