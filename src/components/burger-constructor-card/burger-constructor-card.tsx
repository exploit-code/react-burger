import styles from "./burger-constructor-card.module.scss";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { REMOVE_INGREDIENT, MOVE_INGREDIENT } from "../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { IConstructorIngredientCardProps } from "../../utils/types";

export const BurgerConstructorCard = ({ ingredient, index }: IConstructorIngredientCardProps) => {
  const dispatch = useDispatch();
  //@ts-ignore: in the next sprint
  const removeIngredient = (ingredient) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: ingredient._id });
  };

  const [, constructorIngredientDragRef] = useDrag({
    type: "moveIngredients",
    item: { type: "ingredient", ingredient, index },
  });

  const [, constructorIngredientDropRef] = useDrop<IConstructorIngredientCardProps>({
    accept: "moveIngredients",
    hover(draggedItem) {
      if (!draggedItem || draggedItem.index === index) {
        return;
      }
      dispatch({
        type: MOVE_INGREDIENT,
        payload: { fromIndex: draggedItem.index, toIndex: index },
      });
      draggedItem.index = index;
    },
  });

  return (
    <li
      className={styles.burger_constructor_card}
      ref={(node) => constructorIngredientDragRef(constructorIngredientDropRef(node))}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => removeIngredient(ingredient)}
      />
    </li>
  );
};
