import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Contracts schema
const contractSchema = new Schema({
    data_center: { type: Schema.Types.ObjectId, ref: 'DataCenter' },
    partner: { type: Schema.Types.ObjectId, ref: 'Partner' },
    start_date: { type: Date },
    end_date: { type: Date },
    terms: { type: String },
    pricing_agreement: { type: String },
    created_at: { type: Date, default: Date.now }
  });

export const Contract = mongoose.model('Contract', contractSchema);
