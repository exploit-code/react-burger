import classNames from "classnames";
import styles from "./feed-details.module.scss";
import { IngredientPrice } from "../ingredient-price/ingredient-price";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../services/hooks";

export const FeedDetails = () => {
  const { ingredient } = useSelector((store) => store.currentIngredient);

  return (
    <article className={styles.feed_details}>
      <div className={styles.feed_details__head}>
        <h3 className="text text_type_main-medium">Black Hole Singularity острый бургер</h3>
        <span className={classNames(styles.feed_details__status, "text text_type_main-default")}>
          Выполнен
        </span>
      </div>

      <div className={styles.feed_details__body}>
        <h3 className="text text_type_main-medium">Состав:</h3>
        <ul className={styles.feed_details__list}>
          <li className={styles.feed_details__item}>
            <div className={styles.feed_details__item_ingredient}>
              <div className={styles.feed_details__image}>
                <img
                  className={styles.feed_details__image_src}
                  src={ingredient ? ingredient.image : undefined}
                  alt={""}
                />
              </div>
              <h4 className="text text_type_main-default">Флюоресцентная булка R2-D3</h4>
            </div>

            <div className={styles.feed_details__item_price}>
              <span className="text text_type_digits-default">2</span>
              <span className="text text_type_digits-default">x</span>
              <IngredientPrice price={123} />
            </div>
          </li>
          <li className={styles.feed_details__item}>
            <div className={styles.feed_details__item_ingredient}>
              <div className={styles.feed_details__image}>
                <img
                  className={styles.feed_details__image_src}
                  src={ingredient ? ingredient.image : undefined}
                  alt={""}
                />
              </div>
              <h4 className="text text_type_main-default">Флюоресцентная булка R2-D3</h4>
            </div>

            <div className={styles.feed_details__item_price}>
              <span className="text text_type_digits-default">2</span>
              <span className="text text_type_digits-default">x</span>
              <IngredientPrice price={123} />
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.feed_details__footer}>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date("2023-12-21T14:43:22.587Z")}
        />
        <IngredientPrice price={123} />
      </div>
    </article>
  );
};
