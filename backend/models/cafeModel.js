const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema({
  details: {
    name: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String },
    website: { type: String },
    // Opening hours required and here as a suggestion placeholder. The exact format to be decided by whoever implements the use of this data in querying only open cafes. Feel free to ammend as needed.
    openingHours: [
      { open: { type: String }, close: { type: String } },
      { open: { type: String }, close: { type: String } },
      { open: { type: String }, close: { type: String } },
      { open: { type: String }, close: { type: String } },
      { open: { type: String }, close: { type: String } },
      { open: { type: String }, close: { type: String } },
      { open: { type: String }, close: { type: String } },
    ],
  },
  images: [{
    url: { type: String, required: true },
    title: { type: String, required: true },
    altText: { type: String, required: true }
  }],
  facilities: [String],

  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

cafeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Cafe', cafeSchema, 'cafes');

// NOTE: Information about the use of the location field and the location index may be found in the README.md file in the root of the project.
