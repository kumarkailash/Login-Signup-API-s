const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Login = mongoose.model("todoList",loginSchema);

module.exports = Login;