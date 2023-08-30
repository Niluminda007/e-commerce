import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const ProtectedRoute: React.FC = () => {
  const { checkAuthentication } = UserAuth();
  const location = useLocation();
  const isAuthenticated = checkAuthentication();
  if (!isAuthenticated)
    return <Navigate to="/" state={{ from: location }} replace />;
  return <Outlet />;
};

export default ProtectedRoute;
