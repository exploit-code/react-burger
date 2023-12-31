import styles from "./register.module.scss";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "../../services/hooks";
import { registerThunk } from "../../services/thunk/auth";

export const Register = () => {
  const dispatch = useDispatch();
  const { value, handleChange } = useFormData({ name: "", email: "", password: "" });
  const { authorized, loading } = useSelector((store) => store.auth);

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerThunk({ email: value.email, name: value.name, password: value.password }));
  };

  return authorized ? (
    <Navigate to="/" replace />
  ) : (
    <div className={styles.register}>
      <form className={styles.register__form} onSubmit={handleRegisterSubmit}>
        <h2 className="text text_type_main-medium">Регистрация</h2>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={handleChange}
          value={value.name || ""}
          name={"name"}
          size={"default"}
          extraClass="ml-1"
        />
        <EmailInput
          onChange={handleChange}
          value={value.email || ""}
          name={"email"}
          isIcon={false}
        />
        <PasswordInput
          onChange={handleChange}
          value={value.password || ""}
          name={"password"}
          extraClass="mb-2"
        />
        <Button htmlType="submit" type="primary" size="medium" disabled={loading}>
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.register__jumpto}>
        <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
        <Link className={"text text_type_main-default link"} to={"/login"}>
          Войти
        </Link>
      </div>
    </div>
  );
};
