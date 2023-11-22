import { Navigate } from "react-router-dom";

export const ProtectedRouteElement = ({ element, property, path }) => {
  return property ? element : <Navigate to={path} replace />;
};
