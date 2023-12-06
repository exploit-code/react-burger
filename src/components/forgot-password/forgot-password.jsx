import styles from "./forgot-password.module.scss";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../services/actions/auth";

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.auth);
  const { value, setValue, handleChange } = useFormData({ email: "" });

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(value)).then(() => navigate("/reset-password"));
  };

  return (
    <div className={styles.forgotPassword}>
      <form className={styles.forgotPassword__form} onSubmit={handleForgotPasswordSubmit}>
        <h2 className="text text_type_main-medium">Восстановление пароля</h2>
        <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.email} name={"email"} isIcon={false} placeholder={"Укажите e-mail"} />
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
