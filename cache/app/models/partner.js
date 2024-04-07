const mongoose = require('mongoose');

// Partners schema
const partnerSchema = new mongoose.Schema({

    name: { type: String, required: true },
    location: { type: Schema.Types.ObjectId, ref: 'Location' },
    heat_demand: { type: Number },
    temperature_requirement_min: { type: Number },
    temperature_requirement_max: { type: Number },
    infrastructure_details: { type: String },
    budget: { type: Number },
    industry: { type: String }
  
});

// Create User model based on the schema
const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;
