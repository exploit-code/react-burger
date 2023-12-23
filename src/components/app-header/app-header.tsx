import styles from "./app-header.module.scss";
import cn from "classnames";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";
import { memo } from "react";

export const AppHeader = memo(() => {
  return (
    <header className={cn(styles.app_header, "pt-4 pb-4")}>
      <nav className={styles.app_header__list}>
        <NavLink className={styles.app_header__link} to={"/"}>
          {({ isActive }) => (
            <>
              <BurgerIcon type={isActive ? "primary" : "secondary"} />
              <span
                className={
                  isActive
                    ? "text text_type_main-default"
                    : "text text_type_main-default text_color_inactive"
                }
              >
                Конструктор
              </span>
            </>
          )}
        </NavLink>

        <NavLink className={styles.app_header__link} to={"/feed"}>
          {({ isActive }) => (
            <>
              <ListIcon type={isActive ? "primary" : "secondary"} />
              <span
                className={
                  isActive
                    ? "text text_type_main-default"
                    : "text text_type_main-default text_color_inactive"
                }
              >
                Лента заказов
              </span>
            </>
          )}
        </NavLink>

        <Link className={styles.app_header__logo} to={"/"}>
          <Logo />
        </Link>

        <NavLink className={styles.app_header__link} to={"/profile"}>
          {({ isActive }) => (
            <>
              <ProfileIcon type={isActive ? "primary" : "secondary"} />
              <span
                className={
                  isActive
                    ? "text text_type_main-default"
                    : "text text_type_main-default text_color_inactive"
                }
              >
                Личный кабинет
              </span>
            </>
          )}
        </NavLink>
      </nav>
    </header>
  );
});
