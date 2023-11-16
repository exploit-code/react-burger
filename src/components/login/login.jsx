import styles from "./login.module.scss";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/actions/auth";
import { useEffect, useRef } from "react";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { value, setValue, handleChange } = useFormData({ email: "", password: "" });
  const { loading, authenticated } = useSelector((store) => store.auth);

  const previousLoading = useRef(loading);

  useEffect(() => {
    if (loading !== previousLoading.current) navigate("/");
    previousLoading.current = loading;
  }, [loading, navigate]);

  const handleLoginClick = () => {
    dispatch(login(value));
  };

  return authenticated ? (
    <Navigate to="/" replace />
  ) : (
    <div className={styles.login}>
      <form className={styles.login__form} onSubmit={(e) => e.preventDefault()}>
        <h2 className="text text_type_main-medium">Вход</h2>
        <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.email} name={"email"} isIcon={false} />
        <PasswordInput onChange={(e) => handleChange(e, setValue)} value={value.password} name={"password"} extraClass="mb-2" />
        <Button htmlType="button" type="primary" size="medium" onClick={handleLoginClick} disabled={loading ? true : false}>
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
