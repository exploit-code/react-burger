import styles from "./not-found.module.scss";
import { NotFound } from "../../components/not-found/not-found";

export const NotFoundPage = () => {
  return (
    <section className={styles.notfound}>
      <NotFound />
    </section>
  );
};
