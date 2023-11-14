import styles from "./login.module.scss";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <div className={styles.login}>
      <form className={styles.login__form}>
        <h2 className="text text_type_main-medium">Вход</h2>
        <EmailInput onChange={(e) => handleChange(e, setEmail)} value={email} name={"email"} isIcon={false} />
        <PasswordInput onChange={(e) => handleChange(e, setPassword)} value={password} name={"password"} extraClass="mb-2" />
        <Button htmlType="button" type="primary" size="medium">
          Войти
        </Button>
      </form>
      <div className={styles.login__box}>
        <div className={styles.login__jumpto}>
          <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
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
