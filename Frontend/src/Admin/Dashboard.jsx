import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/dashboard.css";
import veloraimg from "../assets/hero.png";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin">
      <aside className="sidebar">
        <div className="logo">
          <img src={veloraimg} alt="Velora" />
          <span>Velora</span>
        </div>

        <nav className="menu">
          <button
            className="active"
            onClick={() => navigate("/admin")}
          >
            Dashboard
          </button>

          <button onClick={() => navigate("/admin/addproduct")}>
            Products
          </button>

          <button>Orders</button>
          <button>Users</button>
        </nav>
      </aside>

      <div className="main">
        <div className="topbar">
          <h2>Dashboard</h2>
          <div className="profile">Y</div>
        </div>

        <div className="content">
          <div className="welcome">
            <h1>Welcome back, Yomesh 👋</h1>
            <p>
              Here’s what’s happening with your <strong>Velora</strong> store today.
            </p>
          </div>

          <div className="stats">
            <div className="stat">
              <h3>120</h3>
              <p>Total Products</p>
            </div>

            <div className="stat">
              <h3>45</h3>
              <p>Orders Today</p>
            </div>

            <div className="stat">
              <h3>₹12,500</h3>
              <p>Revenue</p>
            </div>
          </div>

          <div className="actions">
            <div
              className="action-card"
              onClick={() => navigate("/admin/addproduct")}
            >
              <h3>Add Product</h3>
              <p>Create and manage products</p>
            </div>

            <div className="action-card">
              <h3>View Orders</h3>
              <p>Check recent orders</p>
            </div>

            <div className="action-card">
              <h3>Customers</h3>
              <p>Manage users & activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;