import styles from "./reset-password.module.scss";
import AppHeader from "../../components/app-header/app-header";
import { ResetPassword } from "../../components/reset-password/reset-password";

export const ResetPasswordPage = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <ResetPassword />
      </main>
    </>
  );
};
