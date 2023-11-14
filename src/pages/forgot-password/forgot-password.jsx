import styles from "./forgot-password.module.scss";
import AppHeader from "../../components/app-header/app-header";
import { ForgotPassword } from "../../components/forgot-password/forgot-password";

export const ForgotPasswordPage = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <ForgotPassword />
      </main>
    </>
  );
};
