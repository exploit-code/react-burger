import styles from "./reset-password.module.scss";
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "../../services/hooks";
import { resetPasswordThunk } from "../../services/thunk/auth";

export const ResetPassword = () => {
  const dispatch = useDispatch();
  const { loading, reset } = useSelector((store) => store.auth);
  const { value, handleChange } = useFormData({ password: "", token: "" });

  const handleResetPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPasswordThunk({ password: value.password, token: value.token }));
  };

  if (!reset) return <Navigate to={"/"} />;

  return reset ? (
    <div className={styles.resetPassword}>
      <form className={styles.resetPassword__form} onSubmit={handleResetPasswordSubmit}>
        <h2 className="text text_type_main-medium">Восстановление пароля</h2>
        <PasswordInput
          onChange={handleChange}
          value={value.password || ""}
          name={"password"}
          extraClass="mb-2"
          placeholder={"Введите новый пароль"}
        />
        <Input
          type={"text"}
          onChange={handleChange}
          value={value.token || ""}
          placeholder={"Введите код из письма"}
          name={"token"}
          size={"default"}
          extraClass="ml-1"
        />
        <Button htmlType="submit" type="primary" size="medium" disabled={loading ? true : false}>
          Сохранить
        </Button>
      </form>
      <div className={styles.resetPassword__jumpto}>
        <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
        <Link className={"text text_type_main-default link"} to={"/login"}>
          Войти
        </Link>
      </div>
    </div>
  ) : (
    <Navigate to="/forgot-password" />
  );
};
