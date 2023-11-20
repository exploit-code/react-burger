import styles from "./login.module.scss";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/actions/auth";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value, handleChange } = useFormData({ email: "", password: "" });
  const { loading, accessToken } = useSelector((store) => store.auth);

  const handleLoginClick = () => {
    dispatch(login(value));
  };

  useEffect(() => {
    if (accessToken) navigate("/profile");
  }, [accessToken, navigate]);

  return accessToken ? (
    <Navigate to="/" replace />
  ) : (
    <div className={styles.login}>
      <form className={styles.login__form}>
        <h2 className="text text_type_main-medium">Вход</h2>
        <EmailInput onChange={handleChange} value={value.email} name={"email"} isIcon={false} />
        <PasswordInput onChange={handleChange} value={value.password} name={"password"} extraClass="mb-2" />
        <Button htmlType="button" type="primary" size="medium" disabled={loading} onClick={handleLoginClick}>
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
