import cn from "classnames";
import styles from "./ingredient-popup.module.scss";
import IngredientParams from "../ingredient-params/ingredient-params";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import CloseButton from "../close-button/close-button";

const IngredientPopup = ({ ingredient, setShowPopup }) => {
  return (
    <section className={cn(styles.ingredient_popup, "pt-10 pr-10 pb-15 pl-10")}>
      <div className={styles.ingredient_popup__content}>
        <div className={styles.ingredient_popup__head}>
          <h3 className={cn(styles.ingredient_popup__title, "text text_type_main-large")}>Детали ингредиента</h3>
          <CloseButton setShowPopup={setShowPopup} />
        </div>
        <div className={styles.ingredient_popup__body}>
          <div className={styles.ingredient_popup__image_box}>
            <img className={styles.ingredient_popup__image} src={ingredient.image_large} alt="" />
          </div>
          <IngredientParams ingredient={ingredient} />
        </div>
      </div>
    </section>
  );
};

IngredientPopup.propTypes = {
  ingredient: PropTypes.shape(ingredientType),
  setShowPopup: PropTypes.func,
};

export default IngredientPopup;
