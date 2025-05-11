import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Admin Components
import WelcomePage from "./components/AdminFolder/WelcomePage";
import Home from "./components/AdminFolder/HomePage";
import AdminLogin from "./components/AdminFolder/AdminLogin";
import AdminSignup from "./components/AdminFolder/AdminSignup";
import ForgotPassword from "./components/AdminFolder/ForgotPassword";
import AdminDashboard from "./components/AdminFolder/AdminDashboard";
import ManageUsers from "./components/AdminFolder/ManageUsers";
import ManageMeals from "./components/AdminFolder/ManageMeals";
import ReportsAndAnalytics from "./components/AdminFolder/ReportsAndAnalytics";
import TrackProgress from "./components/AdminFolder/TrackProgress";
import ContentManagement from "./components/AdminFolder/ContentManagement";
import AdminSettings from "./components/AdminFolder/Settings";

// User Components
import UserLogin from "./components/Auth/UserLogin";
import UserSignup from "./components/Auth/UserSignup";
import UserForgotPassword from "./components/Auth/UserForgotPassword";
import UserDashboard from "./components/UserDashboard/Dashboard";
import Community from "./components/UserDashboard/Community";
import GroceryList from "./components/UserDashboard/GroceryList";
import MealPlan from "./components/UserDashboard/MealPlan";
import Notifications from "./components/UserDashboard/Notifications";
import LogMeal from "./components/UserDashboard/LogMeal";
import Reports from "./components/UserDashboard/Reports";
import TrackProgressUser from "./components/UserDashboard/TrackProgress"; // for user side progress

function App() {
  const [groceryItems, setGroceryItems] = useState([]);

  const sampleMeals = [
    { calories: 300, type: "Breakfast", category: "Veg" },
    { calories: 450, type: "Lunch", category: "Non-Veg" },
    { calories: 250, type: "Dinner", category: "Veg" },
    { calories: 400, type: "Lunch", category: "Veg" },
  ];

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/manage-meals" element={<ManageMeals />} />
        <Route path="/admin/reports-analytics" element={<ReportsAndAnalytics meals={sampleMeals} />} />
        <Route path="/admin/content-management" element={<ContentManagement />} />
        <Route path="/admin/track-progress" element={<TrackProgress />} />
        <Route path="/admin/settings" element={<AdminSettings />} />

        {/* User Routes */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/forgot-password" element={<UserForgotPassword />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/community" element={<Community />} />
        <Route path="/user/meal-plan" element={<MealPlan setGroceryItems={setGroceryItems} />} />
        <Route path="/user/grocery-list" element={<GroceryList groceryItems={groceryItems} />} />
        <Route path="/user/notifications" element={<Notifications />} />
        <Route path="/user/log-meal" element={<LogMeal />} />
        <Route path="/user/progress" element={<TrackProgressUser />} />
        <Route path="/user/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
