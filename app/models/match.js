// Match.js
const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
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
    // Add other match properties as needed
});

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;
