import styles from "./modal.module.scss";
import cn from "classnames";
import { useEffect } from "react";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { createPortal } from "react-dom";
import { CloseButton } from "../close-button/close-button";
import { IModal } from "../../utils/types";

export const Modal = ({ title = "", children, closeModal }: IModal) => {
  const portal = document.getElementById("portal");

  useEffect(() => {
    const escFunction = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeModal) closeModal();
    };
    document.addEventListener("keydown", escFunction, false);
    return () => document.removeEventListener("keydown", escFunction, false);
  }, [closeModal]);

  return portal
    ? createPortal(
        <ModalOverlay closeModal={closeModal}>
          <section
            className={cn(styles.modal, "pt-10 pr-10 pb-15 pl-10")}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modal__head}>
              <h2 className="text text_type_main-large">{title}</h2>
              <CloseButton closeModal={closeModal} />
            </div>
            <div className={styles.modal__body}>{children}</div>
          </section>
        </ModalOverlay>,
        portal
      )
    : null;
};
