import styles from "./profile-orders.module.scss";
import { SiteBar } from "../../components/sidebar/sidebar";

export const ProfileOrdersPage = () => {
  return (
    <article className={styles.profile_orders}>
      <SiteBar />
      <p className="text text_type_digits-default">ProfileOrdersPage</p>
    </article>
  );
};
