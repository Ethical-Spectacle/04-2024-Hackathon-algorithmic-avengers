const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Locations schema
const locationSchema = new Schema({
  address: { type: String },
  city: { type: String },
  state: { type: String },
  postal_code: { type: String },
  latitude: { type: Number },
  longitude: { type: Number }
});

export const Location = mongoose.model('Location', locationSchema);