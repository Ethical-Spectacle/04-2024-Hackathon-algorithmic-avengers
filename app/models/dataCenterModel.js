import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Data Centers schema
const dataCenterSchema = new Schema({
    name: { type: String, required: true },
    location: { type: Schema.Types.ObjectId, ref: 'Location' },
    heat_capacity: { type: Number },
    temperature_supply: { type: Number },
    temperature_return: { type: Number },
    air_temperature_min: { type: Number },
    air_temperature_max: { type: Number },
    infrastructure_details: { type: String },
    pricing_model: { type: String },
    sustainability_metrics: { type: String }
  });

export const DataCenter = mongoose.model('DataCenter', contractSchema);
