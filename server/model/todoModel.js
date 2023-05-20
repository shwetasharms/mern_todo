//import mongoose
const mongoose = require("mongoose");

//route handler
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
});

//export
module.exports = mongoose.model("todo", todoSchema);