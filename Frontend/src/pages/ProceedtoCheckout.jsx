import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import "../css/proceedtocheckout.css";
import { toast } from "react-toastify";
import axios from "axios";

const ProceedtoCheckout = () => {
    const [form, setform] = useState({
        "name": "",
        "phone": "",
        "address": "",
        "city": "",
        "state": "",
        "pincode": ""
    })

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = async () => {

        if (!paymentMethod) {
            return toast.error("Please select payment method")
        }

        try {

            const orderData = {

                address: form,

                paymentMethod,

                products: cart.map((item) => ({
                    name: item.name,
                    price: item.price,
                    qty: item.qty,
                    images: item.images
                })),

                totalAmount: total
            }

            const res = await axios.post(
                "https://velora-5.onrender.com/api/checkout",
                orderData
            )

            toast.success(res.data.message)

            setform({
                name: "",
                phone: "",
                address: "",
                city: "",
                state: "",
                pincode: ""
            })

            window.location.href = "/orders"

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Something went wrong"
            )
        }
    }

    const { cart, currency } = useContext(ShopContext);

    const [paymentMethod, setPaymentMethod] = useState("");

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <div className="checkout-container">

            <h1>Checkout</h1>

            <div className="checkout-wrapper">

                {/* Address Section */}
                <div className="address-section">

                    <h2>Delivery Address</h2>

                    <input type="text" placeholder="Full Name" onChange={handlechange} name="name" value={form.name} required />
                    <input type="text" placeholder="Phone Number" onChange={handlechange} name="phone" value={form.phone} required />
                    <input type="text" placeholder="Address" onChange={handlechange} name="address" value={form.address} required />
                    <input type="text" placeholder="City" onChange={handlechange} name="city" value={form.city} required />
                    <input type="text" placeholder="State" onChange={handlechange} name="state" value={form.state} required />
                    <input type="text" placeholder="Pincode" onChange={handlechange} name="pincode" value={form.pincode} required />

                </div>

                {/* Payment Section */}
                <div className="payment-section">

                    <h2>Payment Method</h2>

                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="COD"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Cash on Delivery
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="UPI"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        UPI
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="CARD"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Card Payment
                    </label>

                    <div className="total-box">
                        <h3>Total Payable</h3>
                        <h2 className="currencyy">{currency}{total}</h2>
                    </div>

                    <button className="place-order-btn" onClick={() => handlesubmit()}>
                        Place Order
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ProceedtoCheckout;