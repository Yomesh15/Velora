import React from "react";
import "../css/hero.css";
import hero from "../assets/hero.png"
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="hero">

      <div className="hero-left">
        <h1>Discover Premium Products for Your Lifestyle</h1>

        <p>
          Shop the latest trends, best deals, and top quality products at Velora.
          Everything you need, delivered fast and easy.
        </p>

        <div className="hero-btns">
          <button className="primary" onClick={() => {navigate('/collections')
            window.scrollTo({top:0, behavior:"smooth"})
          }}>Shop Now</button>
          <button className="secondary"  onClick={() => {navigate('/about')
            window.scrollTo({top:0, behavior:"smooth"})
          }}>About</button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={hero}
          alt="ecommerce"
        />
      </div>

    </div>
  );
};

export default Hero;