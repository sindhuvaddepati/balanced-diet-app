import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
    { id: 3, name: "Alice Johnson", email: "alice@health.com", role: "User" },
    { id: 4, name: "Bob Williams", email: "bob@wellness.org", role: "Admin" },
    { id: 5, name: "Charlie Brown", email: "charlie@fitness.net", role: "User" },
    { id: 6, name: "David Clark", email: "david@tracker.ai", role: "Admin" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "User" });

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (roleFilter === "All" || user.role === roleFilter)
  );

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const addUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: "", email: "", role: "User" });
      setShowAddUser(false);
    } else {
      alert("Please enter valid details");
    }
  };

  const exportToCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["ID,Name,Email,Role"]
        .concat(users.map((user) => `${user.id},${user.name},${user.email},${user.role}`))
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🚀 Manage Users</h2>

      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search by Name or Email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <select onChange={(e) => setRoleFilter(e.target.value)} style={styles.filterSelect}>
          <option value="All">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button onClick={() => setShowAddUser(true)} style={styles.addUserButton}>➕ Add User</button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>ID</th>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Email</th>
            <th style={styles.tableHeader}>Role</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td style={styles.tableCell}>{user.id}</td>
              <td style={styles.tableCell}>{user.name}</td>
              <td style={styles.tableCell}>{user.email}</td>
              <td style={styles.tableCell}>
                <span style={{
                  padding: "5px 10px",
                  borderRadius: "15px",
                  background: user.role === "Admin" ? "#ff7675" : "#55efc4",
                  color: "#2d3436",
                  fontSize: "13px",
                  fontWeight: "600"
                }}>
                  {user.role}
                </span>
              </td>
              <td style={styles.tableCell}>
                <button style={styles.actionButton}>Edit</button>
                <button onClick={() => deleteUser(user.id)} style={styles.deleteButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddUser && (
        <div style={styles.overlay}>
          <div style={styles.addUserForm}>
            <h3 style={{ color: "#d35400" }}>👤 Add New User</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              style={styles.inputBox}
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              style={styles.inputBox}
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              style={styles.selectBox}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            <div>
              <button onClick={addUser} style={styles.saveButton}>💾 Save</button>
              <button onClick={() => setShowAddUser(false)} style={styles.cancelButton}>❌ Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div>
        <button onClick={exportToCSV} style={styles.exportButton}>📤 Export to CSV</button>
        <button style={styles.backButton} onClick={() => navigate("/admin/dashboard")}>
          🔙 Back to Dashboard
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    background: "#fff6e6",
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
  },
  header: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#e67e22",
    marginBottom: "20px",
  },
  filters: {
    marginBottom: "20px",
  },
  searchInput: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #d35400",
    width: "250px",
    marginRight: "10px",
    outline: "none",
  },
  filterSelect: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #d35400",
    marginRight: "10px",
    outline: "none",
  },
  addUserButton: {
    padding: "10px 20px",
    background: "#fd9644",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  table: {
    width: "95%",
    margin: "0 auto 20px",
    borderCollapse: "collapse",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 3px 12px rgba(0,0,0,0.08)",
  },
  tableHeader: {
    backgroundColor: "#ffa502",
    color: "#fff",
    padding: "14px",
    fontSize: "16px",
  },
  tableCell: {
    padding: "12px",
    borderBottom: "1px solid #f1c40f",
    color: "#2c3e50",
  },
  actionButton: {
    marginRight: "8px",
    padding: "6px 10px",
    backgroundColor: "#f39c12",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "6px 10px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  exportButton: {
    margin: "15px 10px 0 0",
    padding: "10px 20px",
    background: "#e67e22",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  backButton: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  addUserForm: {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "350px",
  },
  inputBox: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #d35400",
    outline: "none",
  },
  selectBox: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #d35400",
    outline: "none",
  },
  saveButton: {
    padding: "10px 18px",
    background: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: "10px",
  },
  cancelButton: {
    padding: "10px 18px",
    background: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ManageUsers;
