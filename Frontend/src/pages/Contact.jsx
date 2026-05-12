import React, { useState } from "react";
import "../css/contact.css";
import axios from "axios";
import { toast } from "react-toastify";


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://velora-5.onrender.com/api/contact", form);
      toast.success(res.data.message);
      setForm({ name: "", email: "", phoneno: "", message: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Email Already Saved");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Velora</h1>
        <p>We’d love to hear from you. Fill out the form below.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="phoneno"
            placeholder="Phone Number"
            value={form.phoneno}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


