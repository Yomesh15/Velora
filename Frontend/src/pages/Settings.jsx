import React from "react";
import "../css/settings.css";

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="settings-card">
        <h2 className="title">Settings</h2>
 
        <div className="section">
          <h3>Profile Information</h3>

          <div className="setting-item">
            <span>Username</span>
            <p>Yomesh Nagar</p>
          </div>

          <div className="setting-item">
            <span>Email</span>
            <p>yomesh@example.com</p>
          </div>

          <div className="setting-item">
            <span>Phone Number</span>
            <p>+91 9876543210</p>
          </div>
        </div>
 
        <div className="section">
          <h3>Preferences</h3>

          <div className="setting-item">
            <span>Theme</span>
            <p>Light Mode</p>
          </div>

          <div className="setting-item">
            <span>Language</span>
            <p>English</p>
          </div>

          <div className="setting-item">
            <span>Email Notifications</span>
            <p>Enabled</p>
          </div>
        </div>

        {/* Orders & Payments */}
        <div className="section">
          <h3>Orders & Payments</h3>

          <div className="setting-item">
            <span>Saved Addresses</span>
            <p>2 Addresses Added</p>
          </div>

          <div className="setting-item">
            <span>Payment Method</span>
            <p>UPI / Debit Card</p>
          </div>

          <div className="setting-item">
            <span>Order History</span>
            <p>View Previous Orders</p>
          </div>
        </div>

        {/* App Info */}
        <div className="section">
          <h3>About Velora</h3>

          <div className="setting-item">
            <span>Version</span>
            <p>Velora v1.0.0</p>
          </div>

          <div className="setting-item">
            <span>Support</span>
            <p>support@velora.com</p>
          </div>

          <div className="setting-item">
            <span>Privacy Policy</span>
            <p>Read Terms & Policies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;