import styles from "./reset-password.module.scss";
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <div className={styles.resetPassword}>
      <form className={styles.resetPassword__form}>
        <h2 className="text text_type_main-medium">Восстановление пароля</h2>
        <PasswordInput onChange={(e) => handleChange(e, setPassword)} value={password} name={"password"} extraClass="mb-2" placeholder={"Введите новый пароль"} />
        <Input type={"text"} onChange={(e) => handleChange(e, setCode)} value={code} placeholder={"Введите код из письма"} name={"code"} size={"default"} extraClass="ml-1" />
        <Button htmlType="button" type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      <div className={styles.resetPassword__jumpto}>
        <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
        <Link className={"text text_type_main-default link"} to={{ pathname: "/login" }}>
          Войти
        </Link>
      </div>
    </div>
  );
};
