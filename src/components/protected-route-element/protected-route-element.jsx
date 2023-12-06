import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const ProtectedRouteElement = ({ children, anonymous = false }) => {
  const { accessToken } = useSelector((store) => store.auth);
  const location = useLocation();
  const from = location.state?.from || "/";

  if (anonymous && accessToken) return <Navigate to={from} />;
  if (!anonymous && !accessToken) return <Navigate to="/login" state={{ from: location }} />;
  return children;
};

ProtectedRouteElement.propTypes = {
  children: PropTypes.element,
  anonymous: PropTypes.bool.isRequired,
};
