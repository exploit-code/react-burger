import styles from "./login.module.scss";
import { Login } from "../../components/login/login";

export const LoginPage = () => {
  return (
    <article className={styles.login_page}>
      <Login />
    </article>
  );
};
