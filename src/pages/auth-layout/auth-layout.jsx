import { Outlet } from "react-router-dom";
import styles from "./auth-layout.module.scss";

export const AuthLayout = () => {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
};
