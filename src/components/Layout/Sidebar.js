import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUtensils, faChartLine, faTachometerAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-container ${isOpen ? "expanded" : "collapsed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "<" : ">"}
      </button>

      <ul className="sidebar-menu">
        <li className={location.pathname === "/admin-dashboard" ? "active" : ""}>
          <Link to="/admin-dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} />
            {isOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li className={location.pathname === "/manage-users" ? "active" : ""}>
          <Link to="/manage-users">
            <FontAwesomeIcon icon={faUser} />
            {isOpen && <span>Manage Users</span>}
          </Link>
        </li>
        <li className={location.pathname === "/manage-meals" ? "active" : ""}>
          <Link to="/manage-meals">
            <FontAwesomeIcon icon={faUtensils} />
            {isOpen && <span>Manage Meals</span>}
          </Link>
        </li>
        <li className={location.pathname === "/user-reports" ? "active" : ""}>
          <Link to="/user-reports">
            <FontAwesomeIcon icon={faChartLine} />
            {isOpen && <span>Reports</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
