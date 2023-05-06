const { Router } = require("express");
const bookRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bookModel = require("../model/book.model");
const checkUser = require("../middleware/checkUser.middleware");




bookRouter.get("/", async (req, res) => {
    let { category } = req.query;
    let obj = {};



    if (category) {
        obj.category = category
    }


    if (req.body)
        try {
            let bookData = await bookModel.find(obj);
            res.status(201).send(bookData);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
})

bookRouter.get("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let bookData = await bookModel.find({ _id: id });
        res.status(201).send(bookData);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
})




bookRouter.use(checkUser)
bookRouter.post("/", async (req, res) => {
    try {
        let newBookData = bookModel(req.body);
        await newBookData.save();
        res.status(201).send({ message: "book added successfully!" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
})



bookRouter.delete("/:deleteID", async (req, res) => {
    let id = req.params.deleteID;
    try {
        await bookModel.findByIdAndDelete({ _id: id });
        res.status(204).send({ message: "book deleted succesfuly!" });
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


bookRouter.patch("/:updateID", async (req, res) => {
    let id = req.params.updateID;
    console.log(id)
    try {
        await bookModel.findByIdAndUpdate({ _id: id }, req.body);
        res.status(204).send({ message: "book updated succesfuly!" });
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


module.exports = bookRouter