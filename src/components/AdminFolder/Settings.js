import React, { useState } from "react";

const AdminSettings = () => {
  const [adminName, setAdminName] = useState("Admin");
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  const isDark = theme === "dark";

  const handleSaveChanges = (e) => {
    e.preventDefault();
    alert("Settings updated successfully!");
  };

  const handleDeactivate = () => {
    const confirmed = window.confirm("Are you sure you want to deactivate your account?");
    if (confirmed) {
      alert("Account has been deactivated.");
      setAdminName("");
      setEmail("");
      setPassword("");
      setNotifications(false);
      setTheme("light");
      // Optional: Redirect or disable form
    }
  };

  const themeStyles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "30px",
      background: isDark ? "#1e1e1e" : "#FFF3E0",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "'Segoe UI', sans-serif",
      color: isDark ? "#fff" : "#000",
    },
    heading: {
      textAlign: "center",
      fontSize: "26px",
      color: isDark ? "#ffa500" : "#D2691E",
      marginBottom: "25px",
    },
    input: {
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "14px",
      backgroundColor: isDark ? "#2e2e2e" : "#fff",
      color: isDark ? "#fff" : "#000",
    },
    form: { display: "flex", flexDirection: "column", gap: "20px" },
    formGroup: { display: "flex", flexDirection: "column" },
    formGroupCheckbox: { display: "flex", alignItems: "center", gap: "10px" },
    passwordField: { display: "flex", alignItems: "center", gap: "5px" },
    toggleBtn: {
      background: "#eee",
      border: "1px solid #ccc",
      borderRadius: "6px",
      padding: "5px 10px",
      cursor: "pointer",
    },
    saveBtn: {
      background: "#D2691E",
      color: "#fff",
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
    },
    avatarPlaceholder: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      background: isDark ? "#444" : "#FFD9B3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "30px",
      marginBottom: "8px",
    },
    profilePicSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "25px",
    },
    accountSection: {
      marginTop: "40px",
      paddingTop: "20px",
      borderTop: "1px solid #ddd",
    },
    subheading: {
      fontSize: "18px",
      color: isDark ? "#ffcc99" : "#A0522D",
      marginBottom: "10px",
    },
    dangerBtn: {
      background: "#ff4d4d",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginBottom: "8px",
    },
  };

  return (
    <div style={themeStyles.container}>
      <h2 style={themeStyles.heading}>⚙️ Admin Settings</h2>

      <div style={themeStyles.profilePicSection}>
        <div style={themeStyles.avatarPlaceholder}>👤</div>
        <p style={{ color: isDark ? "#ccc" : "#555", fontSize: "14px" }}>
          Profile Picture (Optional)
        </p>
      </div>

      <form onSubmit={handleSaveChanges} style={themeStyles.form}>
        <div style={themeStyles.formGroup}>
          <label>Admin Name</label>
          <input
            type="text"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            style={themeStyles.input}
          />
        </div>

        <div style={themeStyles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={themeStyles.input}
          />
        </div>

        <div style={themeStyles.formGroup}>
          <label>New Password</label>
          <div style={themeStyles.passwordField}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              style={{ ...themeStyles.input, flex: 1 }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={themeStyles.toggleBtn}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div style={themeStyles.formGroup}>
          <label>Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={themeStyles.input}
          >
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
          </select>
        </div>

        <div style={themeStyles.formGroupCheckbox}>
          <label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            &nbsp; Enable Notifications
          </label>
        </div>

        <button type="submit" style={themeStyles.saveBtn}>💾 Save Changes</button>
      </form>

      <div style={themeStyles.accountSection}>
        <h3 style={themeStyles.subheading}>⚠️ Account Management</h3>
        <button style={themeStyles.dangerBtn} onClick={handleDeactivate}>
          Deactivate Account
        </button>
        <p style={{ fontSize: "13px", color: isDark ? "#aaa" : "#777" }}>
          Note: Deactivating your account will restrict admin access.
        </p>
      </div>
    </div>
  );
};

export default AdminSettings;
