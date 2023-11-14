import styles from "./profile.module.scss";
import AppHeader from "../../components/app-header/app-header";
import { Profile } from "../../components/profile/profile";

export const ProfilePage = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Profile />
      </main>
    </>
  );
};
