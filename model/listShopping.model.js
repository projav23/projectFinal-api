const mongoose = require("mongoose");

const shoppingSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  status:{
    type: Boolean,
    required:true,
    default:true
  },
  space:{
    type: mongoose.Schema.Types.ObjectId, ref:'Spaces'
  }
})

module.exports = mongoose.model('List Shopping', shoppingSchema)