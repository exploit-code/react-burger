import styles from "./modal-overlay.module.scss";
import { IModalOverlayProps } from "../../utils/types";

export const ModalOverlay = ({ children, closeModal }: IModalOverlayProps) => {
  const handleModalOverlayClick = () => {
    if (closeModal) closeModal();
  };

  return (
    <div className={styles.modal_overlay} onClick={handleModalOverlayClick}>
      {children}
    </div>
  );
};
