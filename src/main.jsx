import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/Login";
import MainContent from "./pages/main/Index";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import { TipsTrik1, TipsTrik2, TipsTrik3, TipsTrik4, TipsTrik5 } from './pages/tips/TipsTrik';
import VerifyOTP from "./pages/auth/VerifyOTP";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/tips/1" element={<TipsTrik1 />} />
        <Route path="/tips/2" element={<TipsTrik2 />} />
        <Route path="/tips/3" element={<TipsTrik3 />} />
        <Route path="/tips/4" element={<TipsTrik4 />} />
        <Route path="/tips/5" element={<TipsTrik5 />} />
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);
