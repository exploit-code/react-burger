import styles from "./ingredient-price.module.scss";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredient } from "../../utils/interfaces";

export const IngredientPrice = <T extends IIngredient["price"]>({ price }: { price: T }) => {
  return (
    <div className={styles.ingredient_price}>
      <span className="text text_type_digits-default">{price}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
};
