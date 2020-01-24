const express = require("express");
const routes = express.Router();
// const Todos = require("./../../config/Model/todoschema")
const Signup = require("./../../config/Model/signupschema")
const Login = require('./../../config/Model/loginSchema');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')

routes.get('/getUser', async (req, res) => {

    var signupUser = await Signup.find({})
    res.send({ signupUser: signupUser });

})


routes.post('/signup', (req, res) => {
    const hash = hashPassword(req.body.password)
    const signup = new Signup({
        name: req.body.name,
        email: req.body.email,
        password: hash
    })
    signup.save()
        .then(() => {
            res.send({ message: "user Signup Successfully" });
        })
        .catch((err) => {
            console.log({ message: "Signup failed" });
        })
})



routes.post('/login', async (req, res) => {
    var hash = await Signup.findOne({ email: req.body.email })
    var checkPassword = bcrypt.compareSync(req.body.password, hash.password)

    const jwtToken = jwt.sign({ user: hash }, "saylani")

    // res.send({jwtToken:jwtToken})
    console.log("token====>>>>>>>>>>>>", jwtToken)
    if (checkPassword) {

        res.send({ message: "user login successfully" })
    }
    else {
        res.send({ message: "login failed" })
    }

})

function hashPassword(password) {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(password, salt);
    return hash
}

module.exports = routes;






