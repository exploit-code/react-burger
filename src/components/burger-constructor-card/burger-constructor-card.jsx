import styles from "./burger-constructor-card.module.scss";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/prop-types";
import { REMOVE_INGREDIENT } from "../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

const BurgerConstructorCard = ({ ingredient }) => {
  const dispatch = useDispatch();
  const removeIngredient = (ingredient) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: ingredient._id });
  };

  const [, constructorIngredientDragRef] = useDrag({
    type: "moveIngredients",
    item: ingredient,
  });

  return (
    <li className={styles.burger_constructor_card} ref={constructorIngredientDragRef}>
      <DragIcon type="primary" />
      <ConstructorElement text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image} handleClose={() => removeIngredient(ingredient)} />
    </li>
  );
};

BurgerConstructorCard.propTypes = {
  ingredient: PropTypes.shape(ingredientType).isRequired,
};

export default BurgerConstructorCard;
