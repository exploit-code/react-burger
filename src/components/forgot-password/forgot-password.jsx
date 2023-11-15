import styles from "./forgot-password.module.scss";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";

export const ForgotPassword = () => {
  const { value, setValue, handleChange } = useFormData({ email: "" });

  return (
    <div className={styles.forgotPassword}>
      <form className={styles.forgotPassword__form}>
        <h2 className="text text_type_main-medium">Восстановление пароля</h2>
        <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.email} name={"email"} isIcon={false} placeholder={"Укажите e-mail"} />
        <Button htmlType="button" type="primary" size="medium">
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
