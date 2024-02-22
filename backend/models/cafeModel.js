const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema({
  cafeDetails: {
    name: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String },
    website: { type: String }
  },
  facilities: { type: [String], required: true }
});

module.exports = mongoose.model('Cafe', cafeSchema);
