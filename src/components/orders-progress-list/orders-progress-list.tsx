import classNames from "classnames";
import styles from "./orders-progress-list.module.scss";
import { IOrdersProgressList } from "../../utils/common-types";

export const OrdersProgressList = ({ title, list, success }: IOrdersProgressList) => {
  return (
    <article className={styles.orders_progress_list}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <ul className={styles.orders_progress_list__list}>
        {list.map((item, index) => (
          <li
            key={index}
            className={classNames(
              styles.orders_progress_list__item,
              "text text_type_digits-default",
              success && styles.orders_progress_list__item_success
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};
