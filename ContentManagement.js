import React, { useState } from "react";

const dummyBlogs = [
  { id: 1, title: "Benefits of Protein", author: "Priya", status: "Pending", date: "Apr 7, 2025" },
  { id: 2, title: "Hydration Hacks", author: "John", status: "Approved", date: "Apr 5, 2025" },
  { id: 3, title: "Mindful Eating Habits", author: "Aisha", status: "Pending", date: "Apr 6, 2025" },
];

const ContentManagement = () => {
  const [blogs, setBlogs] = useState(dummyBlogs);
  const [filter, setFilter] = useState("All");

  const handleStatusChange = (id, newStatus) => {
    setBlogs(blogs.map(blog => blog.id === id ? { ...blog, status: newStatus } : blog));
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const filteredBlogs = blogs.filter(blog => filter === "All" || blog.status === filter);

  const total = blogs.length;
  const pending = blogs.filter(b => b.status === "Pending").length;
  const approved = blogs.filter(b => b.status === "Approved").length;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 Content Management</h1>
      <p style={styles.subtext}>Approve or manage user-submitted articles and blog posts</p>

      {/* Stats */}
      <div style={styles.statsContainer}>
        <div style={styles.statCard}><strong>Total:</strong> {total}</div>
        <div style={styles.statCard}><strong>Pending:</strong> {pending}</div>
        <div style={styles.statCard}><strong>Approved:</strong> {approved}</div>
      </div>

      {/* Filter */}
      <div style={styles.filterContainer}>
        <label>Filter:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={styles.select}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
        </select>
      </div>

      {/* Blog List */}
      <div style={styles.blogList}>
        {filteredBlogs.length === 0 ? (
          <p>No blogs available</p>
        ) : (
          filteredBlogs.map(blog => (
            <div key={blog.id} style={styles.blogCard}>
              <div>
                <h3 style={styles.blogTitle}>{blog.title}</h3>
                <p style={styles.blogMeta}>By {blog.author} • {blog.date}</p>
                <p>Status: <strong>{blog.status}</strong></p>
              </div>
              <div style={styles.actions}>
                {blog.status === "Pending" && (
                  <>
                    <button style={styles.approveBtn} onClick={() => handleStatusChange(blog.id, "Approved")}>Approve</button>
                    <button style={styles.rejectBtn} onClick={() => handleStatusChange(blog.id, "Rejected")}>Reject</button>
                  </>
                )}
                <button style={styles.deleteBtn} onClick={() => handleDelete(blog.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 60px",
    fontFamily: "'Segoe UI', sans-serif",
    background: "#FFF8F0",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#A0522D",
    marginBottom: "10px",
  },
  subtext: {
    color: "#6E4A27",
    marginBottom: "30px",
    fontSize: "16px",
  },
  statsContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "25px",
  },
  statCard: {
    background: "#FFDAB3",
    padding: "15px 25px",
    borderRadius: "12px",
    fontWeight: "500",
    color: "#5C3A1E",
  },
  filterContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  select: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  blogList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  blogCard: {
    background: "#FFF3E0",
    padding: "20px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  blogTitle: {
    fontSize: "20px",
    color: "#A0522D",
    marginBottom: "4px",
  },
  blogMeta: {
    fontSize: "14px",
    color: "#7B4B2A",
    marginBottom: "6px",
  },
  actions: {
    display: "flex",
    gap: "10px",
  },
  approveBtn: {
    background: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  rejectBtn: {
    background: "#FF5722",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#8B0000",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ContentManagement;
