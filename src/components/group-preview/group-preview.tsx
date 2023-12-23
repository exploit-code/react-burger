import { IIngredient, IOrder } from "../../utils/common-types";
import styles from "./group-preview.module.scss";
import classNames from "classnames";

export const GroupPreview = ({ ingredients }: { ingredients: any }) => {
  const displayLimit = 5;
  const renderedIngredients = ingredients.slice(0, displayLimit);
  const remainingCount = Math.max(0, ingredients.length - displayLimit);

  return (
    <div className={styles.group_preview}>
      {renderedIngredients.map((item: any, index: any) => (
        <div
          className={classNames(styles.group_preview__item, styles[`group_preview__item_${index}`])}
          key={index}
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
