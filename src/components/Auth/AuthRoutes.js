import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLogin from "../components/Auth/UserLogin";
import UserSignup from "../components/Auth/UserSignup";
import UserForgotPassword from "../components/Auth/UserForgotPassword";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-signup" element={<UserSignup />} />
      <Route path="/forgot-password" element={<UserForgotPassword />} />
    </Routes>
  );
};

export default AuthRoutes;
