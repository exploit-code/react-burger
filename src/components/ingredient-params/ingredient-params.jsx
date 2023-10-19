import styles from "./ingredient-params.module.scss";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import cn from "classnames";

const IngredientParams = ({ ingredient }) => {
  const nutrientLabels = [
    { label: "Калории,ккал", value: ingredient.calories, id: 1 },
    { label: "Белки, г", value: ingredient.proteins, id: 2 },
    { label: "Жиры, г", value: ingredient.fat, id: 3 },
    { label: "Углеводы, г", value: ingredient.carbohydrates, id: 4 },
  ];

  return (
    <div className={styles.ingredient_params}>
      <h4 className={cn(styles.ingredient_params__title, "text text_type_main-medium")}>{ingredient.name}</h4>

      <div className={styles.ingredient_params__box}>
        {nutrientLabels.map((item) => (
          <div className={styles.ingredient_params__item} key={item.id}>
            <h5 className="text text_type_main-default text_color_inactive">{item.label}</h5>
            <span className="text text_type_digits-default text_color_inactive">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

IngredientParams.propTypes = {
  ingredient: PropTypes.shape(ingredientType).isRequired,
};

export default IngredientParams;
