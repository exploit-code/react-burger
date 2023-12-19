import styles from "./ingredient.module.scss";
import { useSelector } from "../../services/hooks";
import { IngredientDetails } from "../../components/ingredient-details/ingredient-details";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../not-found/not-found";
import { useMemo } from "react";
import { IIngredient } from "../../utils/common-types";

export const IngredientPage = () => {
  const { id } = useParams<string>();
  const { data } = useSelector((store) => store.ingredients);
  const viewIngredient: IIngredient | undefined = useMemo(
    () => data.find((el: IIngredient) => el._id === id),
    [data, id]
  );

  return viewIngredient ? (
    <section className={styles.ingredient_page}>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <IngredientDetails />
    </section>
  ) : (
    <NotFoundPage />
  );
};
