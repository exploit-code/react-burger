import styles from "./profile.module.scss";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../services/actions/auth";

export const Profile = () => {
  const dispatch = useDispatch();

  const { value, setValue, handleChange } = useFormData({ name: "", email: "", password: "" });
  const { loading } = useSelector((store) => store.auth);

  const handleRegicterClick = () => {
    dispatch(updateUser(value));
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

      <form className={styles.profile__form} onSubmit={(e) => e.preventDefault()}>
        <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.name} name={"name"} placeholder="Имя" isIcon={true} error={false} extraClass="mb-2" />
        <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.email} name={"login"} placeholder="Логин" isIcon={true} extraClass="mb-2" />
        <PasswordInput onChange={(e) => handleChange(e, setValue)} value={value.password} name={"password"} icon="EditIcon" />
        <Button htmlType="button" type="primary" size="medium" onClick={handleRegicterClick} disabled={loading ? true : false}>
          Сохранить
        </Button>
      </form>
    </article>
  );
};
