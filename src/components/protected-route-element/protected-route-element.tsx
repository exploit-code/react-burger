import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import { IProtectedRoute } from "../../utils/common-types";

export const ProtectedRouteElement = ({ children, anonymous = false }: IProtectedRoute) => {
  const { accessToken } = useSelector((store) => store.auth);
  const location = useLocation();
  const from = location.state?.from || "/";

  if (anonymous && accessToken) return <Navigate to={from} />;
  if (!anonymous && !accessToken) return <Navigate to="/login" state={{ from: location }} />;
  return children;
};
