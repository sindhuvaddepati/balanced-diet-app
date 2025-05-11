import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("adminEmail");
    const storedPassword = localStorage.getItem("adminPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("Login Successful!");
      navigate("/admin/dashboard");
    } else if (email && password) {
      setError("Invalid credentials. Try again.");
    } else {
      alert("New admin detected. Please sign up.");
      navigate("/admin/signup");
    }
  };

  const handleForgotPasswordRedirect = () => {
    navigate("/admin/forgot-password");
  };

  const handleSignupRedirect = () => {
    navigate("/admin/signup");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
          alt="Admin Avatar"
          style={styles.avatar}
        />
        <h2 style={styles.heading}>Admin Login</h2>
        {error && <p style={styles.error}>{error}</p>}
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
        <p style={styles.text}>
          <span onClick={handleForgotPasswordRedirect} style={styles.link}>Forgot Password?</span>
        </p>
        <p style={styles.text}>
          New admin?{" "}
          <span onClick={handleSignupRedirect} style={styles.link}>Sign Up</span>
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
    background: "linear-gradient(135deg, #fff4e6, #ffe7cc)",
  },
  box: {
    width: "370px",
    padding: "30px",
    backgroundColor: "#fffaf3",
    borderRadius: "15px",
    boxShadow: "0px 12px 28px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  heading: {
    marginBottom: "20px",
    color: "#6b4c3b",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.95rem",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#f4a261",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "10px",
  },
  link: {
    color: "#d17c43",
    textDecoration: "none",
    fontWeight: "500",
    cursor: "pointer",
  },
  text: {
    marginTop: "12px",
    fontSize: "0.95rem",
    color: "#775f4c",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
};

export default AdminLogin;
