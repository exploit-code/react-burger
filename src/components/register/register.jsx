import styles from "./register.module.scss";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <div className={styles.register}>
      <form className={styles.register__form}>
        <h2 className="text text_type_main-medium">Регистрация</h2>
        <Input type={"text"} placeholder={"Имя"} onChange={(e) => handleChange(e, setName)} value={name} name={"name"} size={"default"} extraClass="ml-1" />
        <EmailInput onChange={(e) => handleChange(e, setEmail)} value={email} name={"email"} isIcon={false} />
        <PasswordInput onChange={(e) => handleChange(e, setPassword)} value={password} name={"password"} extraClass="mb-2" />
        <Button htmlType="button" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.register__jumpto}>
        <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
        <Link className={"text text_type_main-default link"} to={{ pathname: "/login" }}>
          Войти
        </Link>
      </div>
    </div>
  );
};
