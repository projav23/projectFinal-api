const Spaces = require("../model/space.model");
const mongoose = require("mongoose");

exports.getSpaces = async (req, res) => {
  try {
    const getAll = await Spaces.find().lean();
    console.log("console", getAll);
    res.status(200).json(getAll);
  } catch (e) {
    console.error(e);
  }
};

exports.createSpace = async (req, res) => {
  try {
    const { name, description, users } = req.body;
    const newSpace = await Spaces.create({
      name,
      description,
      users,
    });
    res.status(200).json({ name });
  } catch (e) {
    console.error(e);
  }
};

exports.getSpace = async (req, res) => {
  try {
    const { spaceId } = req.params;
    const findSpace = await Spaces.findById(spaceId);
        console.log('space', findSpace)
    res.status(200).json(findSpace);
  } catch (e) {
    console.error(e);
  }
};
