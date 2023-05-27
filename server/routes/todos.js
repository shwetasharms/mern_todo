const express = require("express");
const router = express.Router();


//Import Controller
const { getTodo, addTodo, viewTodo, updateTodo, deleteTodo } = require("../controllers/todoControllers")



//Mapping Create
router.get("/todo", getTodo);
router.post("/todo", addTodo);
router.get("/todo/:id", viewTodo);
router.put("/todo/", updateTodo);
router.delete("/todo/:id", deleteTodo);

//export
module.exports = router;