import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/orders.css";

const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async () => {

        try {

            const res = await axios.get(
                "https://velora-5.onrender.com/api/orders"
            )

            setOrders(res.data.orders)

        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="orders-page">

            <div className="orders-header">
                <h1>My Orders</h1>
                <p>Track your recent purchases</p>
            </div>

            {
                orders.length === 0 ? (

                    <div className="empty-orders">
                        <h2>No Orders Yet</h2>
                        <p>Your orders will appear here.</p>
                    </div>

                ) : (

                    orders.map((order, index) => (

                        <div key={index} className="order-card">

                            <div className="order-top">

                                <div>
                                    <h3>Order #{index + 1}</h3>
                                    <p>
                                        Payment : {order.paymentMethod}
                                    </p>
                                </div>

                                <div className="total-box">
                                    <span>Total</span>
                                    <h2>₹{order.totalAmount}</h2>
                                </div>

                            </div>

                            <div className="products-container">

                                {
                                    order.products.map((item, i) => (

                                        <div
                                            key={i}
                                            className="product-box"
                                        >

                                            <img
                                                src={item.images?.[0]}
                                                alt={item.name}
                                            />

                                            <div className="product-details">

                                                <h4>{item.name}</h4>

                                                <p>
                                                    Quantity :
                                                    <span> {item.qty}</span>
                                                </p>

                                                <p className="price">
                                                    ₹{item.price}
                                                </p>

                                            </div>

                                        </div>
                                    ))
                                }

                            </div>

                        </div>
                    ))
                )
            }

        </div>
    )
}

export default Orders;