import { NavLink } from "react-router-dom";
import styles from "./profile.module.scss";
import { EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";

export const Profile = () => {
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
            <NavLink className={styles.profile__navlink} to={"/profile"}>
              {({ isActive }) => <span className={isActive ? "text text_type_main-medium" : "text text_type_main-medium text_color_inactive"}>Профиль</span>}
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.profile__navlink} to={"/profile/orders"}>
              {({ isActive }) => <span className={isActive ? "text text_type_main-medium" : "text text_type_main-medium text_color_inactive"}>История заказов</span>}
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.profile__navlink} to={"/logout"}>
              {({ isActive }) => <span className={isActive ? "text text_type_main-medium" : "text text_type_main-medium text_color_inactive"}>Выход</span>}
            </NavLink>
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
