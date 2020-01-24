const express = require("express");
const routes = express.Router()


routes.get('/get',(req,res)=>{
    res.send({message:" index is working"})
})


routes.use("/post",require('./post/post'))


module.exports = routes