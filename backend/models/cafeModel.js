const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema({
  details: {
    name: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String },
    website: { type: String },
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
