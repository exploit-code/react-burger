import styles from "./register.module.scss";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../services/actions/auth";
import { useEffect, useRef } from "react";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { value, setValue, handleChange } = useFormData({ name: "", email: "", password: "" });
  const { loading } = useSelector((store) => store.auth);

  const previousLoading = useRef(loading);

  useEffect(() => {
    if (loading !== previousLoading.current) navigate("/");
    previousLoading.current = loading;
  }, [loading, navigate]);

  const handleRegicterClick = () => {
    dispatch(register(value));
  };

  return (
    <div className={styles.register}>
      <form className={styles.register__form} onSubmit={(e) => e.preventDefault()}>
        <h2 className="text text_type_main-medium">Регистрация</h2>
        <Input type={"text"} placeholder={"Имя"} onChange={(e) => handleChange(e, setValue)} value={value.name} name={"name"} size={"default"} extraClass="ml-1" />
        <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.email} name={"email"} isIcon={false} />
        <PasswordInput onChange={(e) => handleChange(e, setValue)} value={value.password} name={"password"} extraClass="mb-2" />
        <Button htmlType="button" type="primary" size="medium" onClick={handleRegicterClick} disabled={loading ? true : false}>
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
