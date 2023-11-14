import { Link, useLocation } from "react-router-dom";
import styles from "./profile.module.scss";
import cn from "classnames";

export const Profile = () => {
  const pathname = useLocation().pathname;

  return (
    <article className={styles.profile}>
      <nav className={styles.profile__nav}>
        <ul className={styles.profile__navlist}>
          <li>
            <Link
              className={cn(styles.profile__navlink, "text", "text_type_main-medium", { [styles.profile__navlink_active]: pathname === "/profile" })}
              to={{ pathname: "/profile" }}
            >
              Профиль
            </Link>
          </li>
          <li>
            <Link
              className={cn(styles.profile__navlink, "text", "text_type_main-medium", { [styles.profile__navlink_active]: pathname === "/profile/orders" })}
              to={{ pathname: "/profile/orders" }}
            >
              История заказов
            </Link>
          </li>
          <li>
            <Link
              className={cn(styles.profile__navlink, "text", "text_type_main-medium", { [styles.profile__navlink_active]: pathname === "/logout" })}
              to={{ pathname: "/logout" }}
            >
              Выход
            </Link>
          </li>
        </ul>
      </nav>
      <form className={styles.profile__form}></form>
    </article>
  );
};
