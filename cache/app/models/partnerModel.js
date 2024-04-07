import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Partners schema
const partnerSchema = new Schema({
    name: { type: String, required: true },
    location: { type: Schema.Types.ObjectId, ref: 'Location' },
    heat_demand: { type: Number },
    temperature_requirement_min: { type: Number },
    temperature_requirement_max: { type: Number },
    infrastructure_details: { type: String },
    budget: { type: Number },
    industry: { type: String }
  });

export const Partner = mongoose.model('Partner', partnerSchema);