const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
    try {
        await mongoose.connect(process.env.mongoDbUrl);
        console.log("db is connected")
    } catch (error) {
        console.log(err)
    }
}


module.exports = dbConnect