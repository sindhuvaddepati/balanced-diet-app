import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt, faChartLine, faSignOutAlt,
  faChevronLeft, faChevronRight, faUsers,
  faShoppingBasket, faBell, faUtensils,
  faClipboardList, faChartBar
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting("Good Morning 🌞");
    } else if (hours < 18) {
      setGreeting("Good Afternoon 🌤️");
    } else {
      setGreeting("Good Evening 🌙");
    }

    setNotifications(["Meal plan updated!", "New diet tip available!"]);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
          </button>
        </div>

        <ul className="sidebar-menu">
          <li onClick={() => navigate("/user/dashboard")}>
            <FontAwesomeIcon icon={faTachometerAlt} /> {isOpen && <span>Dashboard</span>}
          </li>
          <li onClick={() => navigate("/user/community")}>
            <FontAwesomeIcon icon={faUsers} /> {isOpen && <span>Community</span>}
          </li>
          <li onClick={() => navigate("/user/grocery-list")}>
            <FontAwesomeIcon icon={faShoppingBasket} /> {isOpen && <span>Grocery List</span>}
          </li>
          <li onClick={() => navigate("/user/meal-plan")}>
            <FontAwesomeIcon icon={faUtensils} /> {isOpen && <span>Meal Plan</span>}
          </li>
          <li onClick={() => setShowPopup(!showPopup)}>
            <FontAwesomeIcon icon={faBell} />
            {isOpen && <span>Notifications</span>}
            {notifications.length > 0 && <span className="notification-badge">{notifications.length}</span>}
          </li>
          <li onClick={() => navigate("/user/log-meal")}>
            <FontAwesomeIcon icon={faClipboardList} /> {isOpen && <span>Log a Meal</span>}
          </li>
          <li onClick={() => navigate("/user/progress")}>
            <FontAwesomeIcon icon={faChartBar} /> {isOpen && <span>Track Progress</span>}
          </li>
          <li onClick={() => navigate("/user/reports")}>
            <FontAwesomeIcon icon={faChartLine} /> {isOpen && <span>Reports</span>}
          </li>
        </ul>

        <button className="logout-btn" onClick={() => navigate("/user/login")}>
          <FontAwesomeIcon icon={faSignOutAlt} /> {isOpen && "Logout"}
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="greeting">{greeting}</h2>

        <div className="dashboard-grid">
          <div className="section-card">
            <h3>Statistics</h3>
            <p>🔥 Calories Consumed: <strong>1800 kcal</strong></p>
            <p>💧 Water Intake: <strong>2.5L</strong></p>
            <p>🏋️ Workout Hours: <strong>1.5 hr</strong></p>
          </div>

          <div className="section-card">
            <h3>Mood</h3>
            <p>😊 Mood Today: <strong>Happy</strong></p>
            <p>😴 Sleep Hours: <strong>7 hrs</strong></p>
            <p>🧘 Mindfulness: <strong>10 min</strong></p>
          </div>

          <div className="section-card">
            <h3>Streaks</h3>
            <p>🔥 Meal Logging Streak: <strong>5 days</strong></p>
            <p>🏃‍♂️ Steps Goal: <strong>8,000</strong></p>
            <p>🍎 Healthy Days: <strong>3</strong></p>
          </div>

          <div className="section-card">
            <h3>Meal Suggestions</h3>
            <p>🍽️ Lunch: Grilled chicken + veggies</p>
            <p>🥗 Dinner: Quinoa salad + smoothie</p>
            <p>🍓 Snack: Greek yogurt + berries</p>
          </div>
        </div>
      </div>

      {/* Notification Popup */}
      {showPopup && (
        <div className="notification-popup">
          <h3>Notifications</h3>
          <ul>
            {notifications.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
          <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
