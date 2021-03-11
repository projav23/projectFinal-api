const mongoose = require("mongoose");

const expensesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  type:{
    type:String,
    enum:['Recibos', 'Otros'],
    required:true
  },
  price: {
    type: Number,
    required: true
  },
  space:{
    required:true,
    type: mongoose.Schema.Types.ObjectId, ref:'Spaces'
  }
})

module.exports = mongoose.model('Expenses', expensesSchema)