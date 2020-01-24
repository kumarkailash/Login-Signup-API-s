const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    data:String,
})

const Todos = mongoose.model("todoList",todoSchema);

module.exports = Todos;
