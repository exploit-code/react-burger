import { Navigate } from "react-router-dom";

export const ProtectedRouteElement = ({ element, isAuthenticated, path }) => {
  return isAuthenticated ? element : <Navigate to={path} replace />;
};
