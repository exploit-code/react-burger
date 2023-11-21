import styles from "./modal-overlay.module.scss";
import PropTypes from "prop-types";
import { closeModal } from "../../services/actions/modal";
import { clearCurrentIngredient } from "../../services/actions/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";

const ModalOverlay = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickOverlay = useCallback(() => {
    dispatch(closeModal());
    dispatch(clearCurrentIngredient());
    navigate("/");
  }, [dispatch, navigate]);

  const { modal } = useSelector((store) => store.modal);

  useEffect(() => {
    const escFunction = (e) => {
      if (modal && e.key === "Escape") handleClickOverlay();
    };
    document.addEventListener("keydown", escFunction, false);
    return () => document.removeEventListener("keydown", escFunction, false);
  }, [handleClickOverlay, modal]);

  return (
    <div className={styles.modal_overlay} onClick={handleClickOverlay}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalOverlay;
