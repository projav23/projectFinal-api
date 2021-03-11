const { Router } = require("express");
const route = Router();
const {
  getSpaces,
  createSpace,
  getSpace,
} = require("../controllers/space.controllers");
const {
  getTasks,
  createTask,
  getTasksbyUser,
} = require("../controllers/task.controllers");
const { getUsers } = require("../controllers/users.controllers");
const {getExpenses, createExpenses} = require('../controllers/expenses.controllers')

route
  .get("/", getSpaces)
  .get("/new", getUsers)
  .post("/new", createSpace)
  .get("/:spaceId", getSpace)
  .get("/:spaceId/expenses", getExpenses)
  .post("/:spaceId/expenses/newexpense",createExpenses )
  .get("/:spaceId/tasks", getTasks)
  .post("/:spaceId/tasks/newtask", createTask);

module.exports = route;
