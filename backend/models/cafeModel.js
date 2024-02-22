const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema({
  details: {
    name: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String },
    website: { type: String },
    images: [{
      url: { type: String },
      title: { type: String },
      altText: { type: String }
    }]
  },
  facilities: [String]
});

module.exports = mongoose.model('Cafe', cafeSchema);
