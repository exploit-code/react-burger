import cn from "classnames";
import styles from "./ingredient-details.module.scss";
import IngredientParams from "../ingredient-params/ingredient-params";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

const IngredientDetails = ({ currentIngredient }) => {
  return (
    <section className={cn(styles.ingredient_details)}>
      <div className={styles.ingredient_details__image_box}>
        <img className={styles.ingredient_details__image} src={currentIngredient.image_large} alt={currentIngredient.name} />
      </div>
      <IngredientParams currentIngredient={currentIngredient} />
    </section>
  );
};

IngredientDetails.propTypes = {
  currentIngredient: PropTypes.shape(ingredientType),
};

export default IngredientDetails;
