import React from "react";
import "../css/services.css";

const Services = () => {
  return (
    <div className="services-container">

      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          At Velora, we provide a seamless and premium shopping experience
          with fast delivery, secure payments, and top-notch support.
        </p>
      </section>
 
      <section className="services-grid">
        <div className="service-card">
          <h2>Fast Delivery</h2>
          <p>
            Get your products delivered quickly and safely with our optimized
            delivery system.
          </p>
        </div>

        <div className="service-card">
          <h2>Secure Payments</h2>
          <p>
            We ensure 100% secure transactions with trusted payment gateways
            and encryption.
          </p>
        </div>

        <div className="service-card">
          <h2>24/7 Support</h2>
          <p>
            Our support team is always available to help you with any queries
            or issues.
          </p>
        </div>

        <div className="service-card">
          <h2>Easy Returns</h2>
          <p>
            Hassle-free return policy to make your shopping experience
            stress-free.
          </p>
        </div>

        <div className="service-card">
          <h2>Quality Products</h2>
          <p>
            We provide only premium and verified products to ensure customer
            satisfaction.
          </p>
        </div>

        <div className="service-card">
          <h2>Best Deals</h2>
          <p>
            Enjoy exclusive offers and discounts on a wide range of products.
          </p>
        </div>
      </section>
 
      <section className="services-cta">
        <h2>Experience Velora Today</h2>
        <p>Join thousands of happy customers and explore our collection.</p>
        <button className="services-btn">Shop Now</button>
      </section>

    </div>
  );
};

export default Services;