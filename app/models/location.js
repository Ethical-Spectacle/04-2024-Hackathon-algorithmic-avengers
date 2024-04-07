// Location.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // Add other location properties as needed
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
