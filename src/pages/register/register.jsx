import styles from "./register.module.scss";
import { Register } from "../../components/register/register";

export const RegisterPage = () => {
  return (
    <article className={styles.register_page}>
      <Register />
    </article>
  );
};
