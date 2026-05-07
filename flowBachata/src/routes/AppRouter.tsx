import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Classes from "../pages/Classes/Classes";
import Social from "../pages/Social/Social";
import Transport from "../pages/Transport/Transport";

import Layout from "../components/layout/Layout";
import { ProtectedRoute } from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLICAS */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* RUTAS ABIERTAS */}
        <Route path="/classes" element={<Classes />} />
        <Route path="/social" element={<Social />} />
        <Route path="/transport" element={<Transport />} />

        {/* PRIVADAS (CORRECTO) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<div>404 - Página no encontrada</div>} />

      </Routes>
    </BrowserRouter>
  );
}