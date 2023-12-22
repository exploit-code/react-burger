import styles from "./feed-card.module.scss";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { GroupPreview } from "../group-preview/group-preview";
import { useSelector } from "../../services/hooks";
import { IngredientPrice } from "../ingredient-price/ingredient-price";
import classNames from "classnames";
import { IFeedCard } from "../../utils/common-types";

export const FeedCard = ({ onClick, status }: IFeedCard) => {
  const { data } = useSelector((store) => store.ingredients);

  return (
    <li className={styles.order_card} onClick={onClick}>
      <div className={styles.order_card__head}>
        <span className="text text_type_digits-default">#034535</span>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date("2023-12-21T14:43:22.587Z")}
        />
      </div>
      <div className={styles.order_card__body}>
        <h3 className="text text_type_main-medium">Interstellar бургер</h3>
        {status && (
          <span
            className={classNames(
              "text text_type_main-default",
              styles.order_card__status,
              styles[`order_card__status_${status}`]
            )}
          >
            Status
          </span>
        )}
      </div>
      <div className={styles.order_card__footer}>
        <GroupPreview ingredients={data} />
        <IngredientPrice price={123} />
      </div>
    </li>
  );
};
