import styles from "./login.module.scss";
import { Login } from "../../components/login/login";

export const LoginPage = () => {
  return (
    <section className={styles.login_page}>
      <Login />
    </section>
  );
};
