import styles from "./ingredient.module.scss";
import { useSelector } from "react-redux";
import { IngredientDetails } from "../../components/ingredient-details/ingredient-details";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../not-found/not-found";

export const IngredientPage = () => {
  const { id } = useParams();
  const { data } = useSelector((store) => store.ingredients);
  const [viewIngredient] = data.filter((el) => el._id === id);

  return viewIngredient ? (
    <section className={styles.ingredient_page}>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <IngredientDetails currentIngredient={viewIngredient} />
    </section>
  ) : (
    <NotFoundPage />
  );
};
