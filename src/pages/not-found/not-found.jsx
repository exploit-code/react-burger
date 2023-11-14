import styles from "./not-found.module.scss";
import AppHeader from "../../components/app-header/app-header";

export const NotFoundPage = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <p className="text text_type_main-medium">Error 404 Not Found</p>
      </main>
    </>
  );
};
