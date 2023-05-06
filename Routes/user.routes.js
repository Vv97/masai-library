const { Router } = require("express");
const userRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");




userRouter.post("/register", async (req, res) => {
    const { name, email, password, isAdmin } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            let userData = {
                name,
                email,
                password: hash,
                isAdmin
            };


            let newUser = userModel(userData);
            await newUser.save()

            err ? res.status(400).send({ message: err.message }) : res.status(201).send({ message: "Registeration Succesful!" })
        })

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});





userRouter.post(("/login"), async (req, res) => {
    const { email, password } = req.body;
    try {
        let userExist = await userModel.findOne({ email });
        if (userExist) {
            bcrypt.compare(password, userExist.password, (err, result) => {
                result ? res.status(201).send({ message: "login succesful!", token: jwt.sign({ userID: userExist._id, isAdmin: userExist.isAdmin }, process.env.jwt_secret) }) : res.status(400).send({ message: "Wrong password" });
            })
        } else {
            res.status(400).send({ message: "Wrong email" });
        }

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})








module.exports = userRouter;