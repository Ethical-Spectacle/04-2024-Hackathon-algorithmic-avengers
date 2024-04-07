// Partner.js
const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    },
    heatDemand: {
        type: Number,
        required: true
    },
    temperatureRequirements: {
        type: String,
        required: true
    }
});

const Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;
