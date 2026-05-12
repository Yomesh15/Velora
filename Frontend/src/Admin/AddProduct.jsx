import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./css/addproduct.css";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    images: "",
    bestseller: false,
    category: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        price: Number(form.price),
        images: form.images.split(",").map((img) => img.trim()),
      };

      await axios.post("https://velora-5.onrender.com/api/products/addproduct", payload);

      toast.success("Product Added Successfully ✅");

      // Reset form
      setForm({
        name: "",
        price: "",
        images: "",
        bestseller: false,
        category: "",
        type: "",
        description: "",
      });
    } catch (error) {
      toast.error("Can't Add Product ❌");
    }
  };

  return (
    <div className="dashboard">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add Product</h2>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="images"
          placeholder="Image URLs (comma separated)"
          value={form.images}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Electronics)"
          value={form.category}
          onChange={handleChange}
        />

        <input
          type="text"
          name="type"
          placeholder="Type (e.g. Gaming)"
          value={form.type}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
        ></textarea>

        <label className="checkbox">
          <input
            type="checkbox"
            name="bestseller"
            checked={form.bestseller}
            onChange={handleChange}
          />
          Bestseller
        </label>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;