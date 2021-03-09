const Task = require("../model/task.model");
const mongoose = require("mongoose");

exports.getTasks = async (req, res) => {
  try {
    const { spaceId } = req.params;
    console.log("spaceId", spaceId);
    const allTask = await Task.find({ space: { $in: spaceId } });
    console.log("userId", req.session.userId)
    const taskByUser = await Task.find({$and: [{space: { $in: spaceId }},{'asignedTo': req.session.userId} ]});
    console.log("tareas", allTask);
    res.status(200).json({allTask, taskByUser});
  } catch (e) {
    console.error(e);
  }
};


// exports.getTasksbyUser = async (req, res) => {
//   try {
//     const { spaceId } = req.params;
//     console.log("spaceId", spaceId);
//     const taskByUser = await Task.find({$and: [{space: { $in: spaceId }},{'asignedTo': req.session.userId} ]});
//     console.log("taskByUser", taskByUser);
//     res.status(200).json({taskByUser});
//   } catch (e) {
//     console.error(e);
//   }
// };

exports.createTask = async (req, res) => {
  const { name, description, asignedTo, space } = req.body;
  const newTask = await Task.create({
    name,
    description,
    asignedTo,
    space,
  });
  res.status(200).json({ message: "Creada con exito" });
  try {
  } catch (e) {
    console.error(e);
  }
};
