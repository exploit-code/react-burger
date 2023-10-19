import styles from "./popup-overlay.module.scss";
import PropTypes from "prop-types";

const PopupOverlay = ({ children }) => {
  return <div className={styles.popup_overlay}>{children}</div>;
};

PopupOverlay.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PopupOverlay;
