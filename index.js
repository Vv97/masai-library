const express = require("express");
const dbConnect = require("./database/db.database");
const userRouter = require("./Routes/user.routes");
const bookRouter = require("./Routes/book.routes");
const app = express();
require("dotenv").config();

app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).send({ message: "welcome" })
})

app.use("/user", userRouter);
app.use("/books", bookRouter);




app.listen(process.env.port, () => {
    dbConnect();
    console.log(`server is runing at ${process.env.port}`)
})