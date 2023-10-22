import styles from "./burger-ingredient-card.module.scss";
import cn from "classnames";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

const BurgerIngredientCard = ({ ingredient, setCurrentIngredient, openModal }) => {
  const ingredientClick = () => {
    setCurrentIngredient(ingredient);
    openModal(true);
  };

  return (
    <li className={styles.burger_ingredient_card} onClick={ingredientClick}>
      <div className={cn(styles.burger_ingredient_card__box, styles.burger_ingredient_card__box_head)}>
        <img className={styles.burger_ingredient_card__image} src={ingredient.image_large} alt={ingredient.name} />
        <Counter count={1} size="default" extraClass="m-1" />
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
  setCurrentIngredient: PropTypes.func,
  openModal: PropTypes.func,
};

export default BurgerIngredientCard;
