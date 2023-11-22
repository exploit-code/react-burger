import styles from "./register.module.scss";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../services/actions/auth";
import { useEnterKeySubmit } from "../../hooks/useEnterKeySubmit";

export const Register = () => {
  const dispatch = useDispatch();
  const { value, setValue, handleChange } = useFormData({ name: "", email: "", password: "" });
  const { accessToken, loading } = useSelector((store) => store.auth);

  const handleRegisterSubmit = () => dispatch(register(value));
  const handleKeyDown = useEnterKeySubmit(handleRegisterSubmit);

  return accessToken ? (
    <Navigate to="/" replace />
  ) : (
    <div className={styles.register}>
      <form className={styles.register__form} onSubmit={(e) => e.preventDefault()}>
        <h2 className="text text_type_main-medium">Регистрация</h2>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => handleChange(e, setValue)}
          value={value.name}
          name={"name"}
          size={"default"}
          extraClass="ml-1"
          onKeyDown={handleKeyDown}
        />
        <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.email} name={"email"} isIcon={false} onKeyDown={handleKeyDown} />
        <PasswordInput onChange={(e) => handleChange(e, setValue)} value={value.password} name={"password"} extraClass="mb-2" onKeyDown={handleKeyDown} />
        <Button htmlType="button" type="primary" size="medium" onClick={handleRegisterSubmit} disabled={loading}>
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
