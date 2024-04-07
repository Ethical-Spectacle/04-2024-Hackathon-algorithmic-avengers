import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Matches schema
const matchSchema = new Schema({
    data_center: { type: Schema.Types.ObjectId, ref: 'DataCenter' },
    partner: { type: Schema.Types.ObjectId, ref: 'Partner' },
    match_score: { type: Number },
    status: { type: String, default: 'Pending' },
    created_at: { type: Date, default: Date.now }
  });

export const Match = mongoose.model('Match', matchSchema);