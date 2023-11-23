import styles from "./reset-password.module.scss";
import { ResetPassword } from "../../components/reset-password/reset-password";

export const ResetPasswordPage = () => {
  return (
    <article className={styles.reset_password_page}>
      <ResetPassword />
    </article>
  );
};
