const mongoose = require('mongoose');

// Locations schema
const locationSchema = new mongoose.Schema({
  address: { type: String },
  city: { type: String },
  state: { type: String },
  postal_code: { type: String },
  latitude: { type: Number },
  longitude: { type: Number }
});


const Location = mongoose.model('Location', locationSchema);

module.exports = Location;