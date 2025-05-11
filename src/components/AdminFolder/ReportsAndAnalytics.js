import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ReportsAndAnalytics = () => {
  const [filter, setFilter] = useState("week");
  const [filteredData, setFilteredData] = useState(getDataByFilter("week"));

  function getDataByFilter(filter) {
    if (filter === "month") {
      return [
        { title: "Active Users", value: "4,550", color: "#FFD9B3" },
        { title: "Meals Logged", value: "12,200", color: "#FFBC99" },
        { title: "Calories Burned", value: "210,000", color: "#FFCBA4" },
        { title: "New Recipes", value: "180", color: "#FFE0B2" },
      ];
    } else {
      return [
        { title: "Active Users", value: "1,204", color: "#FFD9B3" },
        { title: "Meals Logged", value: "3,750", color: "#FFBC99" },
        { title: "Calories Burned", value: "65,000", color: "#FFCBA4" },
        { title: "New Recipes", value: "56", color: "#FFE0B2" },
      ];
    }
  }

  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setFilter(selected);
    setFilteredData(getDataByFilter(selected));
  };

  const handleDownload = () => {
    const report = filteredData
      .map((item) => `${item.title}: ${item.value}`)
      .join("\n");
    const blob = new Blob([report], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `diet_report_${filter}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const mealLoggingData = [
    { day: "Mon", meals: 120 },
    { day: "Tue", meals: 150 },
    { day: "Wed", meals: 110 },
    { day: "Thu", meals: 170 },
    { day: "Fri", meals: 90 },
    { day: "Sat", meals: 130 },
    { day: "Sun", meals: 100 },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📊 Reports & Analytics</h1>
      <p style={styles.subtext}>
        Track user performance, diet adherence, and meal engagement metrics
      </p>

      <div style={styles.topActions}>
        <select value={filter} onChange={handleFilterChange} style={styles.select}>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
        <button onClick={handleDownload} style={styles.downloadBtn}>
          📥 Download Report
        </button>
      </div>

      <div style={styles.summaryContainer}>
        {filteredData.map((item, idx) => (
          <div key={idx} style={{ ...styles.card, backgroundColor: item.color }}>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardValue}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div style={styles.chartContainer}>
        <h3 style={styles.sectionTitle}>Weekly Meal Logging</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={mealLoggingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="meals" fill="#FF9933" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activities */}
      <div style={styles.activitiesSection}>
        <h3 style={styles.sectionTitle}>Recent Activities</h3>
        <ul style={styles.activityList}>
          <li>🕗 [08:45 AM] User John logged a breakfast meal 🥣</li>
          <li>✅ [09:10 AM] User Priya completed her weekly goal</li>
          <li>🍽️ [10:05 AM] Admin approved a new recipe: Veggie Delight 🥗</li>
          <li>💧 [11:15 AM] User Arjun logged hydration - 2.5L</li>
        </ul>
      </div>

      <div style={styles.progressContainer}>
        <h3 style={styles.sectionTitle}>Community Goal Progress</h3>
        <div style={styles.progressBarBackground}>
          <div style={styles.progressBarFill}></div>
        </div>
        <p style={styles.progressText}>
          72% of users achieved their calorie goals this week.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 60px",
    fontFamily: "'Segoe UI', sans-serif",
    background: "#FFF3E0",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#D2691E",
    marginBottom: "10px",
  },
  subtext: {
    color: "#6E4A27",
    marginBottom: "30px",
    fontSize: "16px",
  },
  topActions: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "25px",
    alignItems: "center",
    gap: "10px",
  },
  select: {
    padding: "10px 15px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  downloadBtn: {
    padding: "10px 20px",
    background: "#D2691E",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  summaryContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-around",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  card: {
    flex: "1",
    minWidth: "200px",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "18px",
    color: "#7B3F00",
  },
  cardValue: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#5C3317",
  },
  chartContainer: {
    marginBottom: "40px",
    padding: "20px",
    background: "#FFEFD5",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  activitiesSection: {
    marginBottom: "40px",
    padding: "20px",
    background: "#FFF0E0",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#A0522D",
    marginBottom: "10px",
  },
  activityList: {
    listStyle: "none",
    paddingLeft: "20px",
    lineHeight: "1.8",
    color: "#5A3A1D",
  },
  progressContainer: {
    padding: "20px",
    background: "#FFE8CC",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  progressBarBackground: {
    width: "100%",
    height: "25px",
    background: "#F3D7B6",
    borderRadius: "15px",
    overflow: "hidden",
    marginBottom: "10px",
  },
  progressBarFill: {
    height: "100%",
    width: "72%",
    background: "#FF9933",
    transition: "width 0.4s ease",
  },
  progressText: {
    fontSize: "14px",
    color: "#7B4B2A",
  },
};

export default ReportsAndAnalytics;
