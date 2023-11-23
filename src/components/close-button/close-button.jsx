import styles from "./close-button.module.scss";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const CloseButton = ({ closeModal }) => {
  return (
    <button className={styles.close_button} onClick={closeModal}>
      <CloseIcon type="primary" />
    </button>
  );
};

CloseButton.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
