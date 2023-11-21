import { Outlet } from "react-router-dom";
import styles from "./auth-layout.module.scss";
import AppHeader from "../../components/app-header/app-header";

export const AuthLayout = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
