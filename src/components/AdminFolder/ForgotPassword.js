import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("adminEmail");

    if (email === storedEmail) {
      alert("Password reset link sent to your email!");
      navigate("/admin/login");
    } else {
      alert("Email not found. Please check and try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5953/5953709.png"
          alt="Reset Icon"
          style={styles.icon}
        />
        <h2 style={styles.heading}>Forgot Password</h2>
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Reset Password</button>
        </form>
        <p style={styles.text}>
          Remember your password?{" "}
          <Link to="/admin/login" style={styles.link}>Login</Link>
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
  icon: {
    width: "80px",
    height: "80px",
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
  text: {
    marginTop: "15px",
    fontSize: "0.95rem",
    color: "#775f4c",
  },
  link: {
    color: "#d17c43",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default ForgotPassword;
