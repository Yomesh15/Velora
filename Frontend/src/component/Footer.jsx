import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      return toast.error("Please enter email");
    }

    try {
      const res = await axios.post(
        "https://velora-5.onrender.com/api/subscribe",
        { email }
      );

      toast.success(res.data.message);
      setEmail("");

    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  const ontop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };


  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="logo">Velora</h2>
          <p>
            Discover premium products with modern style and trusted quality.
          </p>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>
              <Link to="/collections" onClick={ontop}>
                All Products
              </Link>
            </li>

            <li>
              <Link to="/collections" onClick={ontop}>
                New Arrivals
              </Link>
            </li>

            <li>
              <Link to="/#bestseller" onClick={() => {
                window.scrollTo({top:250, behavior:'smooth'})
              }}>
                Best Sellers
              </Link>
            </li>

            <li>
              <Link to="/" onClick={ontop}>
                Offers & Deals
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about" onClick={ontop}>
                About Us
              </Link>
            </li>

            <li>
              <Link to="/" onClick={ontop}>
                Careers
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={ontop}>
                Contact
              </Link>
            </li>

            <li>
              <Link to="/" onClick={ontop}>
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>
              <Link to="/contact" onClick={ontop}>
                Help Center
              </Link>
            </li>

            <li>
              <Link to="/" onClick={ontop}>
                Returns
              </Link>
            </li>

            <li>
              <Link to="/" onClick={ontop}>
                Shipping Info
              </Link>
            </li>

            <li>
              <Link to="/" onClick={ontop}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>Get early access to sales & offers</p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Velora. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;