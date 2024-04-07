// DataCenter.js
const mongoose = require('mongoose');

const dataCenterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    },
    heatCapacity: {
        type: Number,
        required: true
    },
    pricingModel: {
        type: String,
        required: true
    }
});

const DataCenter = mongoose.model('DataCenter', dataCenterSchema);
module.exports = DataCenter;
