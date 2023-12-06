import cn from "classnames";
import styles from "./ingredient-details.module.scss";
import { IngredientParams } from "../ingredient-params/ingredient-params";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../../pages/not-found/not-found";

export const IngredientDetails = () => {
  const { id } = useParams();
  const { data } = useSelector((store) => store.ingredients);
  const [viewIngredient] = data.filter((el) => el._id === id);

  return viewIngredient ? (
    <section className={cn(styles.ingredient_details)}>
      <div className={styles.ingredient_details__image_box}>
        <img className={styles.ingredient_details__image} src={viewIngredient.image_large} alt={viewIngredient.name} />
      </div>
      <IngredientParams currentIngredient={viewIngredient} />
    </section>
  ) : (
    <NotFoundPage />
  );
};
