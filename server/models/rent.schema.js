var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var rentSchema = new Schema({
  rent: {type: Number},
  sqft: {type: Number},
  city: {type: String}
});

// export our model
module.exports = mongoose.model('Rent', rentSchema, 'rentals');
