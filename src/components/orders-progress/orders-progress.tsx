import styles from "./orders-progress.module.scss";
import { IChildrenJSX } from "../../utils/common-types";

export const OrdersProgress = ({ children }: IChildrenJSX) => {
  return <article className={styles.orders_progress}>{children}</article>;
};
