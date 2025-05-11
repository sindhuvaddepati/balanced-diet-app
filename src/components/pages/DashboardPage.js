import React from "react";
import "./Dashboard.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="welcome-text">Welcome to Your Dashboard</h1>
        <p className="subtext">Manage your profile, track meals, and stay healthy!</p>
      </div>
    </div>
  );
};

export default DashboardPage;
