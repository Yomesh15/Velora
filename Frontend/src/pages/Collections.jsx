import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/collections.css";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const Collections = () => {
  const navigate = useNavigate();
  const { products, currency } = useContext(ShopContext);
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search")?.toLowerCase() || "";

  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [sort, setSort] = useState("");

  const toggleFilter = (value, state, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };



  const categories = [...new Set(products.map((p) => p.category))];
  const types = [...new Set(products.map((p) => p.type))];


  const filteredProducts = products
    .filter((item) => {
      return (
        (category.length === 0 || category.includes(item.category)) &&
        (type.length === 0 || type.includes(item.type)) &&
        item.name.toLowerCase().includes(searchQuery)
      );
    })
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="collection-page">

      {/* FILTERS */}
      <div className="filters">
        <h3>FILTERS</h3>

        <div className="filter-box">
          <p className="filter-title">CATEGORIES</p>
          {categories.map((cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                checked={category.includes(cat)}
                onChange={() => toggleFilter(cat, category, setCategory)}
              />
              {cat}
            </label>
          ))}
        </div>

        <div className="filter-box">
          <p className="filter-title">TYPE</p>
          {types.map((t) => (
            <label key={t}>
              <input
                type="checkbox"
                checked={type.includes(t)}
                onChange={() => toggleFilter(t, type, setType)}
              />
              {t}
            </label>
          ))}
        </div>
      </div>

      <div className="collection-content">

        <div className="top-bar">
          <h2 className="title">
            ALL COLLECTIONS <span></span>
          </h2>

          <select
            className="sort-dropdown"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {searchQuery && (
          <p className="search-result">
            Showing results for "{searchQuery}"
          </p>
        )}

        <div className="collections-grid">
          {filteredProducts.map((item) => (
            <div key={item._id} className="product-card">
              <div className="image-box">
                <img
                  src={item.images?.[0] || ""}
                  alt={item.name}
                  onClick={() => navigate(`/collections/${item._id}`)}
                />
              </div>

              <h3>{item.name}</h3>
              <p className="price">
                {currency}{item.price}
              </p>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="no-results">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Collections;