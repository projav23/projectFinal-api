const Shopping = require("../model/listShopping.model");
const Space = require("../model/space.model");
const mongoose = require("mongoose");

exports.getShoppingList = async (req, res) => {
  try {
    const { spaceId } = req.params;
    console.log("spaceId", spaceId);
    const allItems = await Shopping.find({ space: { $in: spaceId } });
    console.log("userId", req.session.userId);
    console.log("Lista compra", allItems);
    res.status(200).json({ allItems });
  } catch (e) {
    console.error(e);
  }
};

exports.createShoppingList = async (req, res) => {
  try {
    const { name, status, space, quantity } = req.body;
    const { spaceId } = req.params;
    const newItem = await Shopping.create({
      name,
      status,
      quantity,
      space: spaceId,
    });
    const updateSpace = await Space.findByIdAndUpdate(
      spaceId,
      { $addToSet: { listShopping: newItem._id } },
      { new: true }
    );
    res.status(200).json({ message: "Creada con exito", newItem });
  } catch (e) {
    console.error(e);
  }
};
