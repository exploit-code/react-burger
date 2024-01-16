import styles from "./close-button.module.scss";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IUseModal } from "../../utils/interfaces";

export const CloseButton = ({ closeModal }: { closeModal: IUseModal["closeModal"] }) => {
  return (
    <button className={styles.close_button} onClick={closeModal} data-testid="close_button">
      <CloseIcon type="primary" />
    </button>
  );
};
