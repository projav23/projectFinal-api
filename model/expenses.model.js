const mongoose = require("mongoose");

const expensesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  space:{
    type: mongoose.Schema.Types.ObjectId, ref:'Spaces'
  }
})

module.exports = mongoose.model('Expenses', expensesSchema)