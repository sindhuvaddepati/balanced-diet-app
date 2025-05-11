import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("userEmail");

    if (storedEmail !== email) {
      alert("Email not found. Try again.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("userPassword", newPassword);
    alert("Password reset successful! Redirecting to login page...");
    navigate("/user/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2913/2913136.png"
          alt="Reset Icon"
          style={styles.icon}
        />
        <h2 style={styles.heading}>Reset Your Password</h2>
        <p style={styles.subtext}>Enter your email and new password.</p>
        <form onSubmit={handleReset}>
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
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Reset Password</button>
        </form>
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
    marginBottom: "10px",
    color: "#6b4c3b",
  },
  subtext: {
    marginBottom: "20px",
    fontSize: "0.9rem",
    color: "#8c7465",
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
};

export default UserForgotPassword;
