const mongoose = require('mongoose');

// Infrastructure Details schema
const infrastructureDetailSchema = new mongoose.Schema({
    data_center: { type: Schema.Types.ObjectId, ref: 'DataCenter' },
    partner: { type: Schema.Types.ObjectId, ref: 'Partner' },
    type: { type: String },
    description: { type: String },
    capacity: { type: String },
    created_at: { type: Date, default: Date.now }
  });

const Infrastructure = mongoose.model('Infrastructure', infrastructureDetailSchema);

module.exports = Infrastructure;