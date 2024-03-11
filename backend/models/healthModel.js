const mongoose = require("mongoose");

const healthSchema = mongoose.Schema(
  {
    status: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Health", healthSchema);

// This schema is a test schema to check if the database is connected.
