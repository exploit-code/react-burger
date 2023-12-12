import styles from "./not-found.module.scss";
import cn from "classnames";

export const NotFound = () => {
  return <p className={cn(styles.notfound, "text text_type_main-medium")}>Error 404 Not Found</p>;
};
