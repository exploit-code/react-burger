import { ISuccessfulOrders } from "../../utils/common-types";
import styles from "./successful-orders.module.scss";
import classNames from "classnames";

export const SuccessfulOrders = ({ title, quantity }: ISuccessfulOrders) => {
  return (
    <article className={styles.successful_orders}>
      <h2 className="text text_type_main-medium">{title}</h2>
      <p className={classNames(styles.successful_orders__quantity, "text text_type_digits-large")}>
        {quantity}
      </p>
    </article>
  );
};
