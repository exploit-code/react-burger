import styles from "./burger-constructor-card.module.scss";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { REMOVE_INGREDIENT } from "../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";

const BurgerConstructorCard = ({ name, price, image, id }) => {
  const dispatch = useDispatch();
  const removeIngredient = (id) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: id });
  };

  return (
    <li className={styles.burger_constructor_card}>
      <DragIcon type="primary" />
      <ConstructorElement text={name} price={price} thumbnail={image} handleClose={() => removeIngredient(id)} />
    </li>
  );
};

BurgerConstructorCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BurgerConstructorCard;
