const mongoose = require("mongoose");

const calendarSchema = mongoose.Schema({
  name: {
    type: String,
  },
  space: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spaces",
  },
});

module.exports = mongoose.model('Calendar', calendarSchema)