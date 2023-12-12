import styles from "./burger-constructor-card.module.scss";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { REMOVE_INGREDIENT, MOVE_INGREDIENT } from "../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { IConstructorIngredient, IConstructorDraggedItem } from "../../utils/types";

export const BurgerConstructorCard = <T extends IConstructorIngredient>({
  ingredient,
  index,
}: {
  ingredient: T;
  index: number;
}) => {
  const dispatch = useDispatch();
  const removeIngredient = (ingredient: IConstructorIngredient) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: ingredient._id });
  };

  const [, constructorIngredientDragRef] = useDrag({
    type: "moveIngredients",
    item: { type: "ingredient", ingredient, index },
  });

  const [, constructorIngredientDropRef] = useDrop<
    IConstructorDraggedItem<T>,
    void,
    { isHover: boolean }
  >({
    accept: "moveIngredients",
    hover(draggedItem: IConstructorDraggedItem<T> | undefined) {
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
