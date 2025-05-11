import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdGroups,
  MdRestaurantMenu,
  MdInsights,
  MdSettings,
  MdLogout,
  MdLibraryBooks,
  MdTrackChanges,
} from "react-icons/md";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
          alt="Doctor Avatar"
          style={styles.avatar}
        />
        <h1 style={styles.title}>Welcome, Admin!</h1>
      </div>

      <div style={styles.cardGrid}>
        <div style={{ ...styles.card, backgroundColor: "#fff3e0" }} onClick={() => navigate("/admin/manage-users")}>
          <MdGroups style={styles.cardIcon} />
          <p>Manage Users</p>
        </div>
        <div style={{ ...styles.card, backgroundColor: "#fff8e1" }} onClick={() => navigate("/admin/manage-meals")}>
          <MdRestaurantMenu style={styles.cardIcon} />
          <p>Manage Meals</p>
        </div>
        <div style={{ ...styles.card, backgroundColor: "#fce4ec" }} onClick={() => navigate("/admin/reports-analytics")}>
          <MdInsights style={styles.cardIcon} />
          <p>Reports & Analytics</p>
        </div>
        <div style={{ ...styles.card, backgroundColor: "#f3e5f5" }} onClick={() => navigate("/admin/settings")}>
          <MdSettings style={styles.cardIcon} />
          <p>Settings & More</p>
        </div>
        <div style={{ ...styles.card, backgroundColor: "#e1f5fe" }} onClick={() => navigate("/admin/content-management")}>
          <MdLibraryBooks style={styles.cardIcon} />
          <p>Content Management</p>
        </div>
        <div style={{ ...styles.card, backgroundColor: "#ede7f6" }} onClick={() => navigate("/admin/track-progress")}>
          <MdTrackChanges style={styles.cardIcon} />
          <p>Track Progress</p>
        </div>
      </div>

      <button style={styles.logoutButton} onClick={() => navigate("/")}>
        <MdLogout style={styles.logoutIcon} /> Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #fffdf7, #fff3e0)",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  },
  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#5e3c15",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    width: "100%",
    maxWidth: "900px",
  },
  card: {
    borderRadius: "15px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  cardIcon: {
    fontSize: "40px",
    color: "#6d4c41",
    marginBottom: "10px",
  },
  logoutButton: {
    marginTop: "40px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#d84315",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  logoutIcon: {
    fontSize: "20px",
  },
};

export default AdminDashboard;
