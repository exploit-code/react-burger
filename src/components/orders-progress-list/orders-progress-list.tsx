import classNames from "classnames";
import styles from "./orders-progress-list.module.scss";
import { IOrdersProgressList } from "../../utils/interfaces";

export const OrdersProgressList = ({ title, list, success }: IOrdersProgressList) => {
  const columns: "one" | "two" | "three" =
    list.length >= 10 && list.length <= 20 ? "two" : list.length >= 20 ? "three" : "one";

  return (
    <article className={styles.orders_progress_list}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <ul
        className={classNames(
          styles.orders_progress_list__list,
          styles[`orders_progress_list__list_column_${columns}`]
        )}
      >
        {list.map((item) => (
          <li
            key={item._id}
            className={classNames(
              styles.orders_progress_list__item,
              "text text_type_digits-default",
              success && styles.orders_progress_list__item_success
            )}
          >
            {item.number}
          </li>
        ))}
      </ul>
    </article>
  );
};
