import styles from "./forgot-password.module.scss";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "../../services/hooks";
import { forgotPasswordThunk } from "../../services/thunk/auth";
import { useEffect } from "react";

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, reset } = useSelector((store) => store.auth);
  const { value, handleChange } = useFormData({});

  const handleForgotPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPasswordThunk({ email: value.email }));
  };

  useEffect(() => {
    if (reset) navigate("/reset-password");
  }, [reset, navigate]);

  return (
    <div className={styles.forgotPassword}>
      <form className={styles.forgotPassword__form} onSubmit={handleForgotPasswordSubmit}>
        <h2 className="text text_type_main-medium">Восстановление пароля</h2>
        <EmailInput
          onChange={handleChange}
          value={value.email || ""}
          name={"email"}
          isIcon={false}
          placeholder={"Укажите e-mail"}
        />
        <Button htmlType="submit" type="primary" size="medium" disabled={loading}>
          Восстановить
        </Button>
      </form>
      <div className={styles.forgotPassword__box}>
        <div className={styles.forgotPassword__jumpto}>
          <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
          <Link className={"text text_type_main-default link"} to={{ pathname: "/login" }}>
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};
