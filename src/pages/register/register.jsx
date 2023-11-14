import styles from "./register.module.scss";
import AppHeader from "../../components/app-header/app-header";
import { Register } from "../../components/register/register";

export const RegisterPage = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Register />
      </main>
    </>
  );
};
