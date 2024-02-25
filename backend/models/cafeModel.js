const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema({
  // details: {
  //   name: { type: String, required: true },
  //   location: { type: String, required: true },
  //   phone: { type: String },
  //   website: { type: String },
  // },
  // images: [{
  //   url: { type: String, required: true },
  //   title: { type: String, required: true },
  //   altText: { type: String, required: true }
  // }],
  name: { type: String, required: true },
  address: { type: String, required: true },
  website: { type: String },
  phoneNumber: { type: String },
  openingTimes: { type: String },
  facilities: [String]
});

module.exports = mongoose.model('Cafe', cafeSchema);
