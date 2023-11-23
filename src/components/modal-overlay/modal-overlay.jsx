import styles from "./modal-overlay.module.scss";
import PropTypes from "prop-types";

export const ModalOverlay = ({ children, closeModal }) => {
  return (
    <div className={styles.modal_overlay} onClick={() => closeModal()}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired,
};
