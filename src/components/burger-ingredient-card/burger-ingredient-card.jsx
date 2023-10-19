import styles from "./burger-ingredient-card.module.scss";
import cn from "classnames";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const BurgerIngredientCard = ({ image, name, price }) => {
  return (
    <li className={styles.burger_ingredient_card}>
      <div className={cn(styles.burger_ingredient_card__box, styles.burger_ingredient_card__box_head)}>
        <img className={styles.burger_ingredient_card__image} src={image} alt={name} />
        <Counter count={1} size="default" extraClass="m-1" />
      </div>
      <div className={cn(styles.burger_ingredient_card__box, styles.burger_ingredient_card__box_body, "text text_type_digits-default")}>
        <span>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={cn(styles.burger_ingredient_card__box, styles.burger_ingredient_card__box_footer)}>
        <p className="text text_type_main-default">{name}</p>
      </div>
    </li>
  );
};

BurgerIngredientCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default BurgerIngredientCard;
