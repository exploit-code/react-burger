import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectedRouteElement = ({ element, property, path }) => {
  return property ? element : <Navigate to={path} replace />;
};

ProtectedRouteElement.propTypes = {
  element: PropTypes.element.isRequired,
  property: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
