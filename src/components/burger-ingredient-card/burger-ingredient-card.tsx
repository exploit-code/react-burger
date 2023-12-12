import styles from "./burger-ingredient-card.module.scss";
import cn from "classnames";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setCurrentIngredient } from "../../services/actions/ingredient-details";
import { useDrag } from "react-dnd";
import { IIngredient, IConstructorIngredient } from "../../utils/types";

export const BurgerIngredientCard = memo(({ ingredient }: { ingredient: IIngredient }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { ingredients, bun }: any = useSelector((store: any) => store.constructorIngredients);
  const allConstructorIngredients: IConstructorIngredient[] = [...ingredients, bun];
  const count: number = allConstructorIngredients.filter(
    (item: IConstructorIngredient) => item?._id === ingredient._id
  ).length;

  const handleIngredientClick = () => {
    //@ts-ignore: next sprint
    dispatch(setCurrentIngredient(ingredient));
    navigate(`/ingredients/${ingredient._id}`, { state: { background: location } });
  };

  const [, ingredientDragRef] = useDrag({
    type: "ingredients",
    item: ingredient,
  } as { type: string; item: IIngredient });

  return (
    <li
      className={styles.burger_ingredient_card}
      ref={ingredientDragRef}
      onClick={handleIngredientClick}
    >
      <div
        className={cn(styles.burger_ingredient_card__box, styles.burger_ingredient_card__box_head)}
      >
        <img
          className={styles.burger_ingredient_card__image}
          src={ingredient.image_large}
          alt={ingredient.name}
        />
        <Counter count={count} size="default" extraClass="m-1" />
      </div>
      <div
        className={cn(
          styles.burger_ingredient_card__box,
          styles.burger_ingredient_card__box_body,
          "text text_type_digits-default"
        )}
      >
        <span>{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div
        className={cn(
          styles.burger_ingredient_card__box,
          styles.burger_ingredient_card__box_footer
        )}
      >
        <p className="text text_type_main-default">{ingredient.name}</p>
      </div>
    </li>
  );
});
