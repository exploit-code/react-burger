import styles from "./login.module.scss";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/actions/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { value, handleChange } = useFormData({ email: "", password: "" });
  const { loading } = useSelector((store) => store.auth);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(value)).then(() => navigate("/"));
  };

  return (
    <div className={styles.login}>
      <form className={styles.login__form} onSubmit={handleLoginSubmit}>
        <h2 className="text text_type_main-medium">Вход</h2>
        <EmailInput onChange={handleChange} value={value.email} name={"email"} isIcon={false} />
        <PasswordInput onChange={handleChange} value={value.password} name={"password"} extraClass="mb-2" />
        <Button htmlType="submit" type="primary" size="medium" disabled={loading}>
          Войти
        </Button>
      </form>
      <div className={styles.login__box}>
        <div className={styles.login__jumpto}>
          <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
          <Link className={"text text_type_main-default link"} to={{ pathname: "/register" }}>
            Зарегистрироваться
          </Link>
        </div>
        <div className={styles.login__jumpto}>
          <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
          <Link className={"text text_type_main-default link"} to={{ pathname: "/forgot-password" }}>
            Восстановить пароль
          </Link>
        </div>
      </div>
    </div>
  );
};
