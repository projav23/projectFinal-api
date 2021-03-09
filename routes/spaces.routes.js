const { Router } = require("express");
const route = Router();
const {
  getSpaces,
  createSpace,
  getSpace,
} = require("../controllers/space.controllers");
const {getTasks, createTask,getTasksbyUser} = require('../controllers/task.controllers')

route
  .get("/", getSpaces)
  .post("/new", createSpace)
  .get("/:spaceId", getSpace)
  .get("/:spaceId/tasks", getTasks)
  // .get("/:spaceId/tasks/user", getTasksbyUser)
  .post("/:spaceId/newtask", createTask);

module.exports = route;
