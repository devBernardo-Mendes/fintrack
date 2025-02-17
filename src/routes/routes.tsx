import Dashboard from "@/pages/dashboard";
import Signin from "@/pages/signin";
import { Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/fintrack/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
