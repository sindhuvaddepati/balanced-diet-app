import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Fetch stored user credentials from localStorage
    const storedEmail = localStorage.getItem("userEmail") || "";
    const storedPassword = localStorage.getItem("userPassword") || "";

    if (email.trim() === storedEmail && password.trim() === storedPassword) {
      alert("Login Successful!");
      localStorage.setItem("isLoggedIn", "true"); // Store login state
      navigate("/user-dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid Credentials. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>User Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={styles.input} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={styles.input} 
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p>
          <Link to="/user-forgot-password" style={styles.link}>Forgot Password?</Link>
        </p>
        <p>
          Don't have an account? <Link to="/user-signup" style={styles.link}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  box: {
    width: "350px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745", // Green color for user login
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
  },
};

export default UserLogin;
