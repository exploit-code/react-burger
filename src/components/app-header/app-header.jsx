import styles from "./app-header.module.scss";
import cn from "classnames";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <header className={cn(styles.app_header, "pt-4 pb-4")}>
      <div className={styles.app_header__content}>
        <nav>
          <ul className={styles.app_header__list}>
            <li>
              <a href="/" className={cn(styles.app_header__link, styles.app_header__link_active, "pt-4 pb-4 pl-5 pr-5 text text_type_main-default")}>
                <BurgerIcon type="primary" />
                <span>Конструктор</span>
              </a>
            </li>
            <li>
              <a href="/" className={cn(styles.app_header__link, styles.app_header__link_inactive, "pt-4 pb-4 pl-5 pr-5 text text_type_main-default")}>
                <ListIcon type="secondary" />
                <span>Лента заказов</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.app_header__logo}>
          <Logo />
        </div>
        <nav>
          <ul className={styles.app_header__list}>
            <li>
              <a href="/" className={cn(styles.app_header__link, styles.app_header__link_inactive, "pt-4 pb-4 pl-5 pr-5 text text_type_main-default")}>
                <ProfileIcon type="secondary" />
                <span>Личный кабинет</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
