const mongoose = require("mongoose");

const documentsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  urlFile: {
    type: String,
    required: true,
  },
  space: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spaces",
  },
});

module.exports = mongoose.model('Documents', documentsSchema)