import styles from "./modal-overlay.module.scss";
import { IUseModal } from "../../utils/types";

export const ModalOverlay = ({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: IUseModal["closeModal"];
}) => {
  const handleModalOverlayClick = () => {
    if (closeModal) closeModal();
  };

  return (
    <div className={styles.modal_overlay} onClick={handleModalOverlayClick}>
      {children}
    </div>
  );
};
