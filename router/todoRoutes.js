const express = require("express")
const router = express.Router()
const todoController = require("../controller/todoController")

//route 
router.get("/", todoController.showTodos)
router.post("/add", todoController.addTodos)
router.get("/delete/:id", todoController.deleteTodos)

module.exports = router