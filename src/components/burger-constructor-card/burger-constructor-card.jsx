import styles from "./burger-constructor-card.module.scss";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/prop-types";
import { REMOVE_INGREDIENT, MOVE_INGREDIENT } from "../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

const BurgerConstructorCard = ({ ingredient, index }) => {
  const dispatch = useDispatch();
  const removeIngredient = (ingredient) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: ingredient._id });
  };

  const [, constructorIngredientDragRef] = useDrag({
    type: "moveIngredients",
    item: { type: "ingredient", ingredient, index },
  });

  const [, constructorIngredientDropRef] = useDrop({
    accept: "moveIngredients",
    hover(draggedItem) {
      if (!draggedItem || draggedItem.index === index) {
        return;
      }
      dispatch({ type: MOVE_INGREDIENT, payload: { fromIndex: draggedItem.index, toIndex: index } });
      draggedItem.index = index;
    },
  });

  return (
    <li className={styles.burger_constructor_card} ref={(node) => constructorIngredientDragRef(constructorIngredientDropRef(node))}>
      <DragIcon type="primary" />
      <ConstructorElement text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image} handleClose={() => removeIngredient(ingredient)} />
    </li>
  );
};

BurgerConstructorCard.propTypes = {
  ingredient: PropTypes.shape(ingredientType).isRequired,
  index: PropTypes.number.isRequired,
};

export default BurgerConstructorCard;
