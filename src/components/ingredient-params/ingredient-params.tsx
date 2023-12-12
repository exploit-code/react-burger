import styles from "./ingredient-params.module.scss";
import cn from "classnames";
import { IIngredient, INutrientLabels } from "../../utils/types";

export const IngredientParams = ({ currentIngredient }: { currentIngredient: IIngredient }) => {
  const nutrientLabels: INutrientLabels[] = [
    { label: "Калории,ккал", value: currentIngredient.calories, id: 1 },
    { label: "Белки, г", value: currentIngredient.proteins, id: 2 },
    { label: "Жиры, г", value: currentIngredient.fat, id: 3 },
    { label: "Углеводы, г", value: currentIngredient.carbohydrates, id: 4 },
  ];

  return (
    <div className={styles.ingredient_params}>
      <h4 className={cn(styles.ingredient_params__title, "text text_type_main-medium")}>
        {currentIngredient.name}
      </h4>

      <div className={styles.ingredient_params__box}>
        {nutrientLabels.map((item: INutrientLabels) => (
          <div className={styles.ingredient_params__item} key={item.id}>
            <h5 className="text text_type_main-default text_color_inactive">{item.label}</h5>
            <span className="text text_type_digits-default text_color_inactive">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
