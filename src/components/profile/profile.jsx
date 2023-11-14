import { Link, useLocation } from "react-router-dom";
import styles from "./profile.module.scss";
import cn from "classnames";
import { EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";

export const Profile = () => {
  const pathname = useLocation().pathname;

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

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
        <p className={"text text_type_main-default text_color_inactive"}>В этом разделе вы можете изменить свои персональные данные</p>
      </nav>
      <form className={styles.profile__form}>
        <EmailInput onChange={(e) => handleChange(e, setName)} value={name} name={"name"} placeholder="Имя" isIcon={true} error={false} extraClass="mb-2" />
        <EmailInput onChange={(e) => handleChange(e, setLogin)} value={login} name={"login"} placeholder="Логин" isIcon={true} extraClass="mb-2" />
        <PasswordInput onChange={(e) => handleChange(e, setPassword)} value={password} name={"password"} icon="EditIcon" />
      </form>
    </article>
  );
};
