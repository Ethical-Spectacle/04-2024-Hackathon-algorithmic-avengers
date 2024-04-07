import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Infrastructure Details schema
const infrastructureDetailSchema = new Schema({
    data_center: { type: Schema.Types.ObjectId, ref: 'DataCenter' },
    partner: { type: Schema.Types.ObjectId, ref: 'Partner' },
    type: { type: String },
    description: { type: String },
    capacity: { type: String },
    created_at: { type: Date, default: Date.now }
  });

export const InfrastructureDetail = mongoose.model('InfrastructureDetail', infrastructureDetailSchema);