import styles from "./close-button.module.scss";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const CloseButton = ({ setShowPopup }) => {
  return (
    <button className={styles.close_button} onClick={() => setShowPopup(false)}>
      <CloseIcon type="primary" />
    </button>
  );
};

export default CloseButton;
