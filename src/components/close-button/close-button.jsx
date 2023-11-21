import styles from "./close-button.module.scss";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { closeModal } from "../../services/actions/modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCurrentIngredient } from "../../services/actions/ingredient-details";

const CloseButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickModalButton = () => {
    dispatch(closeModal());
    dispatch(clearCurrentIngredient());
    navigate("/");
  };

  return (
    <button className={styles.close_button} onClick={handleClickModalButton}>
      <CloseIcon type="primary" />
    </button>
  );
};

export default CloseButton;
