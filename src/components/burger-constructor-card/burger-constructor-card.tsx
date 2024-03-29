import styles from "./burger-constructor-card.module.scss";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "../../services/hooks";
import { useDrag, useDrop } from "react-dnd";
import { IConstructorIngredient, IConstructorDraggedItem } from "../../utils/interfaces";
import { removeIngridient, moveIngridients } from "../../services/actions/burger-constructor";

export const BurgerConstructorCard = <T extends IConstructorIngredient>({
  ingredient,
  index,
}: {
  ingredient: T;
  index: number;
}) => {
  const dispatch = useDispatch();
  const removeIngredient = (ingredient: IConstructorIngredient) => {
    dispatch(removeIngridient(ingredient));
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
      if (!draggedItem || draggedItem.index === index) return;

      dispatch(moveIngridients({ fromIndex: draggedItem.index, toIndex: index }));

      draggedItem.index = index;
    },
  });

  return (
    <li
      className={styles.burger_constructor_card}
      ref={(node) => constructorIngredientDragRef(constructorIngredientDropRef(node))}
      data-testid={ingredient._id}
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
