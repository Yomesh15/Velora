import React, { useContext } from "react";
import "../css/latestcollection.css";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LatestCollection = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const latestProducts = Array.isArray(products)
    ? products.slice(0, 6)
    : [];

  if (!latestProducts.length) {
    return (
      <section className="latest-collection">
        <div className="container">
          <h2 className="title">Latest Collection</h2>
          <p className="subtitle">
            Discover our newest arrivals
            <hr className="hr" />
          </p>
          <p className="loading">Loading products...</p>
        </div>
      </section>
    );
  }

  const handleAddToCart = (item) => {
    addToCart(item); 

    toast.success(`${item.name} added to cart 🛒`, {
      position: "top-right",
      autoClose: 1500,
    });
  };

  return (
    <section className="latest-collection">
      <div className="container">
        <h2 className="title">Latest Collection</h2>
        <p className="subtitle">
          Discover our newest arrivals
          <hr className="hr" />
        </p>

        <div className="products-grid">
          {latestProducts.map((item) => (
            <div key={item.id} className="product-card">
              
              <img
                src={item.images?.[0] || item.image || ""}
                alt={item.name}
                onClick={() => navigate(`/collections/${item._id}`)}
              />

              <h3>{item.name}</h3>

              <p className="price">
                {currency}
                {item.price}
              </p>

              <button
                className="btn"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;