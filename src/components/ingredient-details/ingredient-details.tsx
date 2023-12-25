import cn from "classnames";
import styles from "./ingredient-details.module.scss";
import { IngredientParams } from "../ingredient-params/ingredient-params";
import { useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { useMemo } from "react";
import { IIngredient } from "../../utils/interfaces";

export const IngredientDetails = () => {
  const { id } = useParams<string>();
  const { data } = useSelector((store) => store.ingredients);
  const viewIngredient: IIngredient | undefined = useMemo(
    () => data.find((el: IIngredient) => el._id === id),
    [data, id]
  );

  return viewIngredient ? (
    <section className={cn(styles.ingredient_details)}>
      <div className={styles.ingredient_details__image_box}>
        <img
          className={styles.ingredient_details__image}
          src={viewIngredient.image_large}
          alt={viewIngredient.name}
        />
      </div>
      <IngredientParams currentIngredient={viewIngredient} />
    </section>
  ) : (
    <NotFoundPage />
  );
};
