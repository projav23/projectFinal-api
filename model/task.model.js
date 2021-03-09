const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  asignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  space:{
    required:true,
    type: mongoose.Schema.Types.ObjectId, ref:'Spaces'
  }
});

module.exports = mongoose.model('Tasks', taskSchema)