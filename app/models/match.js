const mongoose = require('mongoose');

// Matches schema
const matchSchema = new mongoose.Schema({
    data_center: { type: Schema.Types.ObjectId, ref: 'DataCenter' },
    partner: { type: Schema.Types.ObjectId, ref: 'Partner' },
    match_score: { type: Number },
    status: { type: String, default: 'Pending' },
    created_at: { type: Date, default: Date.now }
  });

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;