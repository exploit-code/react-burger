import styles from "./close-button.module.scss";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ICloseButtonProps } from "../../utils/types";

export const CloseButton = ({ closeModal }: ICloseButtonProps) => {
  return (
    <button className={styles.close_button} onClick={closeModal}>
      <CloseIcon type="primary" />
    </button>
  );
};
