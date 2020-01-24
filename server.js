const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())

const mongoose = require("./config/db")


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});


app.listen(3003,()=>{
    console.log("server is working")
})





app.use(express.json());
app.use('/',require('./routes'))


// module.exports = app;