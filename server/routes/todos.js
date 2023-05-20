const express = require("express");
const router = express.Router();


//Import Controller
const { getTodo, addTodo, viewTodo, updateTodo, deleteTodo } = require("../controllers/todoControllers")



//Mapping Create
router.get("/todo", getTodo);
// router.post("/todo", addTodo);
// router.get("/todo/", viewTodo);
// router.put("/todo/", updateTodo);
// router.delete("/todo/", deleteTodo);

//export
module.exports = router;