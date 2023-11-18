import styles from "./forgot-password.module.scss";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../services/actions/auth";

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, accessToken } = useSelector((store) => store.auth);
  const { value, setValue, handleChange } = useFormData({ email: "" });

  const handleForgotPasswordClick = async () => {
    try {
      await dispatch(forgotPassword(value));
      navigate("/reset-password");
    } catch (error) {
      console.log(error);
    }
  };

  return accessToken ? (
    <Navigate to="/" replace />
  ) : (
    <div className={styles.forgotPassword}>
      <form className={styles.forgotPassword__form} onSubmit={(e) => e.preventDefault()}>
        <h2 className="text text_type_main-medium">Восстановление пароля</h2>
        <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.email} name={"email"} isIcon={false} placeholder={"Укажите e-mail"} />
        <Button htmlType="button" type="primary" size="medium" onClick={handleForgotPasswordClick} disabled={loading ? true : false}>
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
