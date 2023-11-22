import styles from "./reset-password.module.scss";
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../services/actions/auth";
import { useEnterKeySubmit } from "../../hooks/useEnterKeySubmit";

export const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, accessToken, reset } = useSelector((store) => store.auth);
  const { value, setValue, handleChange } = useFormData({ password: "", token: "" });

  const handleResetPasswordSubmit = async () => {
    try {
      await dispatch(resetPassword(value));
      await navigate("/login");
    } catch (error) { 
      console.log(error);
    }
  };

  const handleKeyDown = useEnterKeySubmit(handleResetPasswordSubmit);

  return !reset || accessToken ? (
    <Navigate to="/" replace />
  ) : (
    <div className={styles.resetPassword}>
      <form className={styles.resetPassword__form} onSubmit={(e) => e.preventDefault()}>
        <h2 className="text text_type_main-medium">Восстановление пароля</h2>
        <PasswordInput
          onChange={(e) => handleChange(e, setValue)}
          value={value.password}
          name={"password"}
          extraClass="mb-2"
          placeholder={"Введите новый пароль"}
          onKeyDown={handleKeyDown}
        />
        <Input
          type={"text"}
          onChange={(e) => handleChange(e, setValue)}
          value={value.token}
          placeholder={"Введите код из письма"}
          name={"token"}
          size={"default"}
          extraClass="ml-1"
          onKeyDown={handleKeyDown}
        />
        <Button htmlType="button" type="primary" size="medium" onClick={handleResetPasswordSubmit} disabled={loading ? true : false}>
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
