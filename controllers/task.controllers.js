const Task = require("../model/task.model");
const Space =require('../model/space.model')
const mongoose = require("mongoose");

exports.getTasks = async (req, res) => {
  try {
    const { spaceId } = req.params;
    console.log("spaceId", spaceId);
    const allTask = await Task.find({ space: { $in: spaceId } });
    console.log("userId", req.session.userId);
    const taskByUser = await Task.find({
      $and: [{ space: { $in: spaceId } }, { asignedTo: req.session.userId }],
    });
 
    console.log("tareas", allTask);
    res.status(200).json({ allTask, taskByUser});
  } catch (e) {
    console.error(e);
  }
};



exports.createTask = async (req, res) => {
  try {
    const { name, description, asignedTo, space } = req.body;
    const {spaceId} = req.params
    const newTask = await Task.create({
      name,
      description,
      asignedTo,
      space: spaceId,
    });
    const updateSpace = await Space.findByIdAndUpdate(
      spaceId, 
      {$addToSet:{tasks: newTask._id}},
      {new:true}
      )
    res.status(200).json({ message: "Creada con exito", newTask });
  } catch (e) {
    console.error(e);
  }
};
