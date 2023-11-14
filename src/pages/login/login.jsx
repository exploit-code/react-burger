import styles from "./login.module.scss";
import AppHeader from "../../components/app-header/app-header";
import { Login } from "../../components/login/login";

export const LoginPage = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Login />
      </main>
    </>
  );
};
