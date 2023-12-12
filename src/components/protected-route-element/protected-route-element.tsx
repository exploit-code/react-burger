import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IProtectedRoute } from "../../utils/types";

export const ProtectedRouteElement = ({ children, anonymous = false }: IProtectedRoute) => {
  const { accessToken }: any = useSelector((store: any) => store.auth);
  const location = useLocation();
  const from = location.state?.from || "/";

  if (anonymous && accessToken) return <Navigate to={from} />;
  if (!anonymous && !accessToken) return <Navigate to="/login" state={{ from: location }} />;
  return children;
};
