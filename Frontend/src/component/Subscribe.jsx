import React, { useState } from "react";
import "../css/subscribe.css";
import { toast } from "react-toastify";
import axios from "axios";

const Subscribe = () => {
  const [form, setform] = useState({
    email: ""
  });

  const handlechange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email) {
      return toast.error("Please enter your email");
    }

    try {
      const res = await axios.post(
        "https://velora-5.onrender.com/api/subscribe",
        { email: form.email }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setform({ email: "" });
      } else {
        toast.error(res.data.message);
      }

    } catch (err) {
      console.error(err); // 🔥 add this for debugging
      toast.error(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="subscribe-section">
      <div className="subscribe-container">
        <h2>Get 20% Off on First Order</h2>
        <p>
          Subscribe to our newsletter and receive 20% discount on your first order.
        </p>

        <form className="subscribe-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={form.email}
            onChange={handlechange}
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;