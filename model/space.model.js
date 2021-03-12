const mongoose = require("mongoose");

const spaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  type:{
    type: String,
    enum:['Personal', 'Grupal']
  },
  password:{
    type: String,
    required:true
  },
  imgURL:{
    type: String,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tasks",
    },
  ],
  expenses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expenses",
    },
  ],
  calendar: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Calendar",
    },
  ],
  documents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Documents",
    },
  ],
  chores: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chores",
    },
  ],
  listShopping: [
    { type: mongoose.Schema.Types.ObjectId, ref: "List Shopping" },
  ],
});

module.exports = mongoose.model("Spaces", spaceSchema)