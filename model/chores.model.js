const mongoose = require("mongoose");

const choresSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  space: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spaces",
  },
});

module.exports = mongoose.model('Chores', choresSchema)