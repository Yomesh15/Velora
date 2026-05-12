import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    address: {
        name: String,
        phone: String,
        address: String,
        city: String,
        state: String,
        pincode: String
    },

    paymentMethod: String,

    products: [
        {
            name: String,
            price: Number,
            qty: Number,
            images: [String]
        }
    ],

    totalAmount: Number

}, { timestamps: true })

const Order = mongoose.model("Order", orderSchema)

export default Order;