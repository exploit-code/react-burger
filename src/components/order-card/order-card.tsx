import styles from "./order-card.module.scss";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { GroupPreview } from "../group-preview/group-preview";
import { IngredientPrice } from "../ingredient-price/ingredient-price";
import classNames from "classnames";
import { IOrderCard } from "../../utils/interfaces";
import { useSelector } from "../../services/hooks";
import { Loader } from "../loader/loader";

export const OrderCard = ({ onClick, renderStatus, order }: IOrderCard) => {
  const { loading, error } = useSelector((store) => store.combineOrders);
  return loading || error ? (
    <Loader text={loading ? "loading..." : "error"} />
  ) : (
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
            {order.upgradeStatus}
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
