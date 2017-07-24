var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// created the rentSchema
var rentSchema = new Schema({
  rent: {type: Number},
  sqft: {type: Number},
  city: {type: String}
});

// export our model
// talking with the rentals collection
module.exports = mongoose.model('Rent', rentSchema, 'rentals');
