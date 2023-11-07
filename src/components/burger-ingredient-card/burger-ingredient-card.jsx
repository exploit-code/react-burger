import styles from "./burger-ingredient-card.module.scss";
import cn from "classnames";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/prop-types";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_INGREDIENT } from "../../services/actions/ingredient-details";
import { useDrag } from "react-dnd";

const BurgerIngredientCard = ({ ingredient, openModal }) => {
  const dispatch = useDispatch();
  const handleIngredientClick = () => {
    openModal(true);
    dispatch({ type: SET_CURRENT_INGREDIENT, payload: ingredient });
  };

  const { ingredients, bun } = useSelector((store) => store.constructorIngredients);
  const allConstructorIngredients = [...ingredients, bun];
  const count = allConstructorIngredients.filter((item) => item?._id === ingredient._id).length;

  const [, dragRef] = useDrag({
    type: "ingredients",
    item: ingredient,
  });

  return (
    <li className={styles.burger_ingredient_card} onClick={handleIngredientClick} ref={dragRef}>
      <div className={cn(styles.burger_ingredient_card__box, styles.burger_ingredient_card__box_head)}>
        <img className={styles.burger_ingredient_card__image} src={ingredient.image_large} alt={ingredient.name} />
        <Counter count={count} size="default" extraClass="m-1" />
      </div>
      <div className={cn(styles.burger_ingredient_card__box, styles.burger_ingredient_card__box_body, "text text_type_digits-default")}>
        <span>{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={cn(styles.burger_ingredient_card__box, styles.burger_ingredient_card__box_footer)}>
        <p className="text text_type_main-default">{ingredient.name}</p>
      </div>
    </li>
  );
};

BurgerIngredientCard.propTypes = {
  ingredient: PropTypes.shape(ingredientType).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default memo(BurgerIngredientCard);
