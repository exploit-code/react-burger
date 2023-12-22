import styles from "./profile-orders.module.scss";
import { SiteBar } from "../../components/sidebar/sidebar";
import { FeedCard } from "../../components/feed-card/feed-card";
import { useLocation, useNavigate } from "react-router-dom";

export const ProfileOrdersPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOrderClick: React.MouseEventHandler<HTMLLIElement> = () => {
    navigate(`/profile/orders/${1}`, { state: { background: location } });
  };

  const cards: number[] = [1, 2, 3, 4, 5, 6];
  return (
    <section className={styles.profile_orders}>
      <div className={styles.profile_orders__sitebar}>
        <SiteBar />
        <p className={"text text_type_main-default text_color_inactive"}>
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </div>
      <ul className={styles.profile_orders__list}>
        {cards.map((index) => (
          <FeedCard key={index} onClick={handleOrderClick} status={"error"} />
        ))}
      </ul>
    </section>
  );
};
