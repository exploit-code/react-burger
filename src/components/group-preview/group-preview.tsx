import styles from "./group-preview.module.scss";
import classNames from "classnames";
import { IIngredientUpgrade } from "../../utils/interfaces";

export const GroupPreview = ({ ingredients }: { ingredients: IIngredientUpgrade[] }) => {
  const displayLimit: number = 5;
  const renderedIngredients: IIngredientUpgrade[] = ingredients.slice(0, displayLimit);
  const remainingCount: number = Math.max(0, ingredients.length - displayLimit);

  return (
    <div className={styles.group_preview}>
      {renderedIngredients.map((item, index) => (
        <div
          className={classNames(styles.group_preview__item, styles[`group_preview__item_${index}`])}
          key={item._id}
        >
          <img className={styles.group_preview__image} src={item.image} alt={item.name} />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className={classNames(styles.group_preview__item, "text text_type_main-default")}>
          <span>+</span>
          <span>{remainingCount}</span>
        </div>
      )}
    </div>
  );
};
