// Contract.js
const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
    dataCenter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DataCenter',
        required: true
    },
    partner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Partner',
        required: true
    },
    // Add other contract properties as needed
});

const Contract = mongoose.model('Contract', contractSchema);
module.exports = Contract;
