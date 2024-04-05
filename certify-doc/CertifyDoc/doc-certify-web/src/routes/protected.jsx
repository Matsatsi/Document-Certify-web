import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("authenticated"); // accessTokenOperations.get();

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};
