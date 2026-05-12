import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import "../css/product.css";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [related, setRelated] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Array.isArray(products) || products.length === 0) return;

    const found = products.find((e) => e._id === id); 

    if (!found) {
      setProduct(null);
      setLoading(false);
      return;
    }

    setProduct(found);

  
    const imgs = Array.isArray(found.images)
      ? found.images
      : found.image
      ? [found.image]
      : [];

    setSelectedImage(imgs[0] || "");

    const rel = products.filter(
      (item) =>
        item.category === found.category &&
        item._id !== found._id 
    );

    setRelated(rel.slice(0, 4));
    setLoading(false);
  }, [id, products]);

  if (loading) {
    return <p className="loading">Loading product...</p>;
  }

  if (!product) {
    return <p className="loading">Product not found ❌</p>;
  }

  const images = Array.isArray(product.images)
    ? product.images
    : product.image
    ? [product.image]
    : [];

  return (
    <div className="product-container">
      <div className="product-page">
        {/* LEFT */}
        <div className="product-left">
          {product.bestseller && (
            <span className="badge">Bestseller</span>
          )}

          <div className="image-gallery">
            <div className="thumbnails">
              {images.length > 0 ? (
                images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="thumb"
                    className={selectedImage === img ? "active" : ""}
                    onClick={() => setSelectedImage(img)}
                  />
                ))
              ) : (
                <p>No images available</p>
              )}
            </div>

            <div className="main-image">
              {selectedImage ? (
                <img src={selectedImage} alt={product.name} />
              ) : (
                <p>No image</p>
              )}
            </div>
          </div>
        </div>

        <div className="product-right">
          <h1 className="product-title">{product.name}</h1>

          <div className="rating">
            ⭐⭐⭐⭐☆ <span>(120 reviews)</span>
          </div>

          <p className="product-price">
            {currency}
            {product.price}
          </p>

          <p className="product-desc">
            {product.description || "Premium quality product."}
          </p>

          <p className="meta">
            Category: <b>{product.category}</b> | Type:{" "}
            <b>{product.type}</b>
          </p>

          <div className="quantity-box">
            <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
              -
            </button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          <div className="product-actions">
            <button
              className="add-to-cart"
              onClick={() => {
                addToCart(product, qty);
                setQty(1);
                toast.success(`${product.name} added to cart 🛒`);
              }}
            >
              Add to Cart
            </button>

            {/* <button className="buy-now">
              Buy Now
            </button> */}
          </div>

          <div className="extra-info">
            <p>✔ 100% Original Product</p>
            <p>✔ Free Delivery in 3-5 days</p>
            <p>✔ 7 Days Easy Return</p>
          </div>
        </div>
      </div>

      {Array.isArray(related) && related.length > 0 && (
        <div className="related-section">
          <h2>Related Products</h2>

          <div className="related-grid">
            {related.map((item) => (
              <div
                key={item._id} 
                className="related-card"
                onClick={() =>{
                  navigate(`/collections/${item._id}`)
                  window.scrollTo({top:0, behavior:"smooth"})
                }
                }

              >
                <img
                  src={item.images?.[0] || item.image || ""}
                  alt={item.name}
                  className="relatedimg"
                />
                <p>{item.name}</p>
                <span>
                  {currency}
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;