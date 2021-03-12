const Spaces = require("../model/space.model");
const mongoose = require("mongoose");
const User = require("../model/user.model");
const { findByIdAndUpdate } = require("../model/space.model");

exports.getSpaces = async (req, res) => {
  try {
    const getAll = await Spaces.find().lean().sort({ name: 1 }).populate('users');
    console.log("console", getAll);
    res.status(200).json(getAll);
  } catch (e) {
    console.error(e);
  }
};

exports.createSpace = async (req, res) => {
  try {
    const { name, description, password, owner, type, users } = req.body;
    const newSpace = await Spaces.create({
      name,
      description,
      password,
      type,
      owner: req.session.userId,
      users
    });
    res.status(200).json({ name, users, description, type });
  } catch (e) {
    console.error(e);
  }
};

exports.getSpace = async (req, res) => {
  try {
    const { spaceId } = req.params;
    const findSpace = await Spaces.findById(spaceId).populate('users');
    console.log("space", findSpace);
    res.status(200).json(findSpace);
  } catch (e) {
    console.error(e);
  }
};

exports.editSpace = async (req, res) => {
  try {
    const { spaceId } = req.params;
    const { name, description, users } = req.body;
    const space = await Spaces.findByIdAndUpdate(
      spaceId,
      {
        name,
        description,
        users,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ message: "Espacio actualizado" });
  } catch (e) {
    console.error(e);
  }
};
