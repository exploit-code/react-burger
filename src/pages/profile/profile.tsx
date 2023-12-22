import styles from "./profile.module.scss";
import cn from "classnames";
import { Profile } from "../../components/profile/profile";
import { SiteBar } from "../../components/sidebar/sidebar";

export const ProfilePage = () => {
  return (
    <section className={cn(styles.profile, "container")}>
      <div className={styles.profile__sitebar}>
        <SiteBar />
        <p className={"text text_type_main-default text_color_inactive"}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles.profile__profile}>
        <Profile />
      </div>
    </section>
  );
};
