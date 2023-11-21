import ModalOverlay from "../modal-overlay/modal-overlay";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import CloseButton from "../close-button/close-button";
import cn from "classnames";
import PropTypes from "prop-types";

const Modal = ({ title = "", children }) => {
  const portal = document.getElementById("portal");

  return createPortal(
    <ModalOverlay>
      <section className={cn(styles.modal, "pt-10 pr-10 pb-15 pl-10")} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal__head}>
          <h2 className="text text_type_main-large">{title}</h2>
          <CloseButton />
        </div>
        <div className={styles.modal__body}>{children}</div>
      </section>
    </ModalOverlay>,
    portal
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Modal;
