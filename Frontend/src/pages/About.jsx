import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div className="about-container">
      
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Velora</h1>
        <p>
          Velora is a modern shopping experience designed with simplicity,
          elegance, and performance in mind.
        </p>
      </section>

      {/* Content Section */}
      <section className="about-content">
        <div className="about-box">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality products with a seamless
            online experience. We focus on minimal design, fast performance,
            and user-friendly interfaces.
          </p>
        </div>

        <div className="about-box">
          <h2>Why Velora?</h2>
          <p>
            Velora stands for clean aesthetics, premium feel, and smooth
            interactions. We believe shopping should be simple, fast, and
            enjoyable.
          </p>
        </div>

        <div className="about-box">
          <h2>Our Vision</h2>
          <p>
            To become a leading platform in modern e-commerce by combining
            technology with design excellence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stat">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="stat">
          <h3>500+</h3>
          <p>Products</p>
        </div>

        <div className="stat">
          <h3>4.8★</h3>
          <p>Average Rating</p>
        </div>
      </section>

    </div>
  );
};

export default About;