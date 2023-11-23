import styles from "./profile.module.scss";
import cn from "classnames";
import { Profile } from "../../components/profile/profile";
import { SiteBar } from "../../components/sidebar/sidebar";

export const ProfilePage = () => {
  return (
    <section className={cn(styles.profile, "container")}>
      <SiteBar />
      <Profile />
    </section>
  );
};
