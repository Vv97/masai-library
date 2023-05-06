const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },

    author: {
        type: String,
        require: true
    },


    category: {
        type: String,
        require: true
    },

    price: {
        type: Number,
        require: true
    },

    quantity: {
        type: Number,
        require: true
    }

}, {
    versionKey: false

})



const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel