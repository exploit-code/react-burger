import styles from "./register.module.scss";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.register}>
      <div className={styles.register__form}>
        <h2 className="text text_type_main-medium">Регистрация</h2>
        <Input type={"text"} placeholder={"Имя"} onChange={(e) => setName(e.target.value)} value={name} name={"name"} size={"default"} extraClass="ml-1" />
        <EmailInput onChange={(e) => setEmail(e.target.value)} value={email} name={"email"} isIcon={false} />
        <PasswordInput onChange={(e) => setPassword(e.target.value)} value={password} name={"password"} extraClass="mb-2" />
        <Button htmlType="button" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </div>
      <div className={styles.register__login}>
        <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
        <Link className={cn(styles.register__link, "text text_type_main-default")} to={{ pathname: "/login" }}>
          Войти
        </Link>
      </div>
    </div>
  );
};
