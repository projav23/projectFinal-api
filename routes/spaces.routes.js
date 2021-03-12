const { Router } = require("express");
const route = Router();
const {
  getSpaces,
  createSpace,
  getSpace,
  editSpace
} = require("../controllers/space.controllers");
const {
  getTasks,
  createTask,
  getTasksbyUser,
} = require("../controllers/task.controllers");
const { getUsers } = require("../controllers/users.controllers");
const {getExpenses, createExpenses} = require('../controllers/expenses.controllers')
const {createShoppingList, getShoppingList} = require('../controllers/shoppingList.controllers')

route
  .get("/", getSpaces)
  .get("/new", getUsers)
  .post("/new", createSpace)
  .get("/:spaceId", getSpace)
  .post("/:spaceId/edit", editSpace)
  .get("/:spaceId/expenses", getExpenses)
  .post("/:spaceId/expenses/newexpense",createExpenses )
  .get("/:spaceId/tasks", getTasks)
  .post("/:spaceId/tasks/newtask", createTask)
  .get("/:spaceId/shoppinglist", getShoppingList)
  .post("/:spaceId/shoppinglist/newshoppinglist",createShoppingList )

module.exports = route;
