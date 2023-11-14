import styles from "./app-header.module.scss";
import cn from "classnames";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderMenuItem from "../header-menu-item/header-menu-item";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className={cn(styles.app_header, "pt-4 pb-4")}>
      <div className={styles.app_header__content}>
        <nav>
          <ul className={styles.app_header__list}>
            <HeaderMenuItem icon={<BurgerIcon type="primary" />} text="Конструктор" active={true} />
            <HeaderMenuItem icon={<ListIcon type="secondary" />} text="Лента заказов" active={false} />
          </ul>
        </nav>
        <div className={styles.app_header__logo}>
          <Link to={{ pathname: "/" }}>
            <Logo />
          </Link>
        </div>
        <nav>
          <ul className={styles.app_header__list}>
            <HeaderMenuItem icon={<ProfileIcon type="secondary" />} text="Личный кабинет" active={false} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
