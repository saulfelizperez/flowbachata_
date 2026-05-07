import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, token } = useAuth();

  // sin usuario o sin token → no autorizado
  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};