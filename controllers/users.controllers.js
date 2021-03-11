const Users = require("../model/user.model");
const mongoose = require("mongoose");


exports.getUsers = async (req,res) =>{
  try {
  const getAll = await Users.find({}, {username:1, _id:1}).lean()
  console.log('users', getAll)
  res.status(200).json(getAll)
  } catch (e) {
  console.error(e)
  }
}