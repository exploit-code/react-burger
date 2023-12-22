import { OrdersProgress } from "../../components/orders-progress/orders-progress";
import { SuccessfulOrders } from "../../components/successful-orders/successful-orders";
import styles from "./feed.module.scss";
import { OrdersProgressList } from "../../components/orders-progress-list/orders-progress-list";
import { FeedCard } from "../../components/feed-card/feed-card";
import { useLocation, useNavigate } from "react-router-dom";

export const FeedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cards: number[] = [1, 2, 3, 4, 5, 6];
  const progressOrders: string[] = ["034538", "034541", "034542"];
  const successOrders: string[] = [
    "034533",
    "034532",
    "034533",
    "034532",
    "034533",
    "034532",
    "034533",
    "034532",
  ];

  const handleOrderClick: React.MouseEventHandler<HTMLLIElement> = () => {
    navigate(`/feed/${1}`, { state: { background: location } });
  };

  return (
    <section className={styles.feed_page}>
      <h1 className="text text_type_main-large pt-10 pb-5">Лента заказов</h1>
      <div className={styles.feed_page__content}>
        <ul className={styles.feed_page__list}>
          {cards.map((index) => (
            <FeedCard key={index} onClick={handleOrderClick} />
          ))}
        </ul>
        <div className={styles.feed_page__info}>
          <OrdersProgress>
            <>
              <OrdersProgressList title={"Готовы:"} list={successOrders} success={true} />
              <OrdersProgressList title={"В работе:"} list={progressOrders} success={false} />
            </>
          </OrdersProgress>
          <SuccessfulOrders title={"Выполнено за все время:"} quantity={"28 752"} />
          <SuccessfulOrders title={"Выполнено за сегодня:"} quantity={"138"} />
        </div>
      </div>
    </section>
  );
};
