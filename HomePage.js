import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Balanced Diet App</h1>
      <button onClick={() => navigate("/admin-login")}>Admin Login</button>
      <button onClick={() => navigate("/user-dashboard")}>User Login</button>
    </div>
  );
};

export default HomePage;
