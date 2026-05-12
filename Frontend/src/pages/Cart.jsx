import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "../css/cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, currency } = useContext(ShopContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const navigate = useNavigate()

  return (
    <div className="cart-container">

      <h1 className="cart-title">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">

                <img src={item.images?.[0]} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>{currency}{item.price}</p>

                  <div className="qty">
                    <span>Qty: {item.qty}</span>
                  </div>
                </div>

                <div className="cart-subtotal">
                  {currency}{item.price * item.qty}
                </div>

              </div>
            ))}
          </div>

          {/* Tottal */}
          <div className="cart-summary">
            <h2>Total: {currency}{total}</h2>
            <button className="checkout-btn" onClick={() => navigate("/proceedtocheckout")}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;