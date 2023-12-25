import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import { IProtectedRoute } from "../../utils/interfaces";

export const ProtectedRouteElement = ({ children, anonymous = false }: IProtectedRoute) => {
  const { authorized } = useSelector((store) => store.auth);
  const location = useLocation();
  const from = location.state?.from || "/";

  if (anonymous && authorized) return <Navigate to={from} />;
  if (!anonymous && !authorized) return <Navigate to="/login" state={{ from: location }} />;
  return children;
};
