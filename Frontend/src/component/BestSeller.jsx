import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "../css/bestseller.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BestSeller = () => {
  const navigate = useNavigate()
  const { products, currency, addToCart } = useContext(ShopContext);

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="loading">Loading best sellers...</p>;
  }

  const bestProducts = products.filter((item) => item.bestseller);

  const displayProducts = bestProducts.slice(0, 6);

  const handleAddToCart = (item) => {
    addToCart(item);

    toast.success(`${item.name} added to cart 🛒`, {
      position: "top-right",
      autoClose: 1500,
    });
  };

  return (
    <section className="best-seller">
      <div className="container">
        <h2 className="title">Best Sellers Products</h2>
        <p className="subtitle">
          Most loved products by our customers
          <hr className="hr" />
        </p>

        <div className="products-grid">
          {displayProducts.map((item) => (
            <div key={item.id} className="product-card">
              
              <div className="img-container">
                <img
                  src={item.images?.[0] || ""}
                  alt={item.name}
                 onClick={() => navigate(`/collections/${item._id}`)}
                />
              </div>

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

export default BestSeller;