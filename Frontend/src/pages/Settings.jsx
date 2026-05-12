import React from "react";
import "../css/settings.css";

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="settings-card">
        <h2 className="title">Velora Settings</h2>

        <div className="section">
          <h3>Account</h3>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="section">
          <h3>Preferences</h3>

          <label className="toggle">
            Dark Mode
            <input type="checkbox" />
            <span></span>
          </label>

          <label className="toggle">
            Email Notifications
            <input type="checkbox" defaultChecked />
            <span></span>
          </label>
        </div>

        <div className="section">
          <h3>Security</h3>
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>

        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;