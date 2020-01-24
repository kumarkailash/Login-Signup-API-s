const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://usernam:<password>@cluster0-bol45.mongodb.net/test?retryWrites=true&w=majority")

module.exports = mongoose;