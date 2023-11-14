import styles from "./profile.module.scss";
import AppHeader from "../../components/app-header/app-header";

export const ProfilePage = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <>profile</>
      </main>
    </>
  );
};
