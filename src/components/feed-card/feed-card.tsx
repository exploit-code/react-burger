import styles from "./feed-card.module.scss";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { GroupPreview } from "../group-preview/group-preview";
// import { useSelector } from "../../services/hooks";
import { IngredientPrice } from "../ingredient-price/ingredient-price";
import classNames from "classnames";
import { useOrderStatus } from "../../hooks/useOrderStatus";
// import { IFeedCard } from "../../utils/common-types";

export const FeedCard = ({ onClick, renderStatus, order }: any) => {
  const { status } = useOrderStatus(order.status);

  return (
    <li className={styles.order_card} onClick={() => onClick(order)}>
      <div className={styles.order_card__head}>
        <span className="text text_type_digits-default">#{order.number}</span>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(`${order.createdAt}`)}
        />
      </div>
      <div className={styles.order_card__body}>
        <h3 className="text text_type_main-medium">{order.name}</h3>
        {renderStatus && (
          <span
            className={classNames(
              "text text_type_main-default",
              styles.order_card__status,
              styles[`order_card__status_${order.status}`]
            )}
          >
            {status}
          </span>
        )}
      </div>
      <div className={styles.order_card__footer}>
        <GroupPreview ingredients={order.ingredients} />
        <IngredientPrice price={order.totalPrice} />
      </div>
    </li>
  );
};
