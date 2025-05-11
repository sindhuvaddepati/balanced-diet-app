import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    const adminEmail = localStorage.getItem("adminEmail");
    if (adminEmail) {
      navigate("/admin/login", { replace: true });
    } else {
      navigate("/admin/signup", { replace: true });
    }
  };

  const handleUserLogin = () => {
    navigate("/user/login");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to the Balanced Diet Portal</h1>
        <p style={styles.subheading}>Choose your role to continue</p>

        <div style={styles.cardContainer}>
          {/* Admin Card */}
          <div
            style={styles.card}
            onClick={handleAdminLogin}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              alt="Admin Avatar"
              style={styles.cardImage}
            />
            <h2 style={styles.cardTitle}>Admin</h2>
            <p style={styles.cardText}>Manage users, meals, and track insights.</p>
            <button style={styles.cardButton}>Admin Login</button>
          </div>

          {/* User Card */}
          <div
            style={styles.card}
            onClick={handleUserLogin}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
              alt="User Avatar"
              style={styles.cardImage}
            />
            <h2 style={styles.cardTitle}>User</h2>
            <p style={styles.cardText}>Track your meals and reach your goals.</p>
            <button style={styles.cardButton}>User Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    width: "100%",
    background: "linear-gradient(135deg, #fff4e6, #ffe7cc)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Inter', sans-serif",
    padding: "20px",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.8rem",
    fontWeight: "600",
    color: "#6b4c3b",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#a17053",
    marginBottom: "50px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#fffaf3",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
    padding: "50px 40px",
    width: "100%",
    maxWidth: "420px",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    textAlign: "center",
  },
  cardImage: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    marginBottom: "20px",
    objectFit: "cover",
  },
  cardTitle: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#5e412f",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "1rem",
    color: "#775f4c",
    marginBottom: "30px",
  },
  cardButton: {
    backgroundColor: "#f4a261",
    color: "#fff",
    border: "none",
    padding: "14px 32px",
    fontSize: "1rem",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default WelcomePage;
