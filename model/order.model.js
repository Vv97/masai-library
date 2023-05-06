const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user: {
        type: {
            type: ObjectId,
            ref: String
        },
        require: true
    },
    books: {
        type: [{ type: ObjectId, ref: string }],
        require: true
    },

}, {
    versionKey: false

})



const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel