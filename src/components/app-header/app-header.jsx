import styles from "./app-header.module.scss";
import cn from "classnames";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";

const AppHeader = () => {
  const pathname = useLocation().pathname;

  return (
    <header className={cn(styles.app_header, "pt-4 pb-4")}>
      <nav className={styles.app_header__list}>
        <Link className={styles.app_header__link} to={{ pathname: "/" }}>
          <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
          <span className={cn("text", "text_type_main-default", { text_color_inactive: pathname !== "/" })}>Конструктор</span>
        </Link>
        <Link className={styles.app_header__link} to={{ pathname: "/order-feed" }}>
          <ListIcon type={pathname === "/order-feed" ? "primary" : "secondary"} />
          <span className={cn("text", "text_type_main-default", { text_color_inactive: pathname !== "/order-feed" })}>Лента заказов</span>
        </Link>
        <Link className={styles.app_header__logo} to={{ pathname: "/" }}>
          <Logo />
        </Link>
        <Link className={styles.app_header__link} to={{ pathname: "/profile" }}>
          <ProfileIcon type={pathname === "/profile" ? "primary" : "secondary"} />
          <span className={cn("text", "text_type_main-default", { text_color_inactive: pathname !== "/profile" })}>Личный кабинет</span>
        </Link>
      </nav>
    </header>
  );
};

export default AppHeader;
