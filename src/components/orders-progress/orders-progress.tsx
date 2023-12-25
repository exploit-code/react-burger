import styles from "./orders-progress.module.scss";
import { IChildrenJSX } from "../../utils/interfaces";

export const OrdersProgress = ({ children }: IChildrenJSX) => {
  return <div className={styles.orders_progress}>{children}</div>;
};
