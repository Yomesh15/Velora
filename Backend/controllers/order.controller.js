import Order from "../models/order.model.js";


export const Checkoutt = async (req, res) => {

    try {

        const {
            address,
            paymentMethod,
            products,
            totalAmount
        } = req.body

        if (
            !address?.name ||
            !address?.phone ||
            !address?.address ||
            !address?.city ||
            !address?.state ||
            !address?.pincode ||
            !paymentMethod ||
            !products?.length ||
            !totalAmount
        ) {

            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        await Order.create(req.body)

        return res.status(200).json({
            success: true,
            message: "Order placed successfully"
        })

    } catch (error) {

        console.log(error)

        return res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}




export const GetOrders = async (req, res) => {

    try {

        const orders = await Order.find().sort({ createdAt: -1 })

        res.status(200).json({
            success: true,
            orders
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Error fetching orders"
        })
    }
}