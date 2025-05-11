import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Balanced Diet App</h1>
      <p>Choose your login type:</p>
      <button onClick={() => navigate("/admin")}>Admin Login</button>
      <button onClick={() => navigate("/user")}>User Login</button>
    </div>
  );
};

export default Home;
