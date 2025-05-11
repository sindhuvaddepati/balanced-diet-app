import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("adminEmail", email);
    localStorage.setItem("adminPassword", password);

    alert("Signup Successful!");
    navigate("/admin/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
          alt="Signup Icon"
          style={styles.icon}
        />
        <h2 style={styles.heading}>Admin Sign Up</h2>
        <form onSubmit={handleSignup}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.text}>
          Already have an account?{" "}
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

export default AdminSignup;
