import React, { useState } from "react";
import "./Reports.css";

const Reports = () => {
  const [filter, setFilter] = useState("");
  const [dateRange, setDateRange] = useState("");

  const reportsData = [
    { id: 1, name: "Weekly Nutrition Report", date: "2025-03-10", type: "Nutrition", download: "nutrition_weekly.pdf" },
    { id: 2, name: "Workout Progress", date: "2025-03-15", type: "Fitness", download: "workout_progress.pdf" },
    { id: 3, name: "Meal Tracking Report", date: "2025-03-18", type: "Diet", download: "meal_tracking.pdf" },
    { id: 4, name: "Hydration Summary", date: "2025-03-20", type: "Nutrition", download: "hydration_summary.pdf" },
    { id: 5, name: "March Fitness Overview", date: "2025-03-25", type: "Fitness", download: "march_fitness.pdf" },
    { id: 6, name: "Daily Calorie Intake", date: "2025-03-26", type: "Diet", download: "daily_calories.pdf" },
    { id: 7, name: "Monthly Nutrition Review", date: "2025-03-29", type: "Nutrition", download: "monthly_nutrition.pdf" },
    { id: 8, name: "Yoga Routine Progress", date: "2025-04-01", type: "Fitness", download: "yoga_routine.pdf" },
  ];
  

  const filteredReports = reportsData.filter((report) =>
    (filter === "" || report.type === filter) &&
    (dateRange === "" || report.date === dateRange)
  );

  return (
    <div className="reports-container">
      <h2 className="heading">📄 Reports</h2>

      {/* Filters */}
      <div className="filters">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="">All Categories</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Fitness">Fitness</option>
          <option value="Diet">Diet</option>
        </select>
        <input type="date" onChange={(e) => setDateRange(e.target.value)} value={dateRange} />
      </div>

      {/* Report Cards */}
      <div className="report-cards">
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <div className="report-card" key={report.id}>
              <div className="card-header">
                <h3>{report.name}</h3>
              </div>
              <div className="card-details">
                <p><strong>Date:</strong> {report.date}</p>
                <p><strong>Category:</strong> {report.type}</p>
              </div>
              <a href={`/downloads/${report.download}`} download className="download-btn">⬇ Download</a>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>📭 No reports found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
