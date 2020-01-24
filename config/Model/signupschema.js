const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Signup = mongoose.model("signupUsers",signupSchema);

module.exports = Signup;