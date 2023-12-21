import { OrdersProgress } from "../../components/orders-progress/orders-progress";
import { SuccessfulOrders } from "../../components/successful-orders/successful-orders";
import styles from "./feed.module.scss";
import { OrdersProgressList } from "../../components/orders-progress-list/orders-progress-list";

export const FeedPage = () => {
  return (
    <section className={styles.feed_page}>
      <h1 className="text text_type_main-large pt-10 pb-5">Лента заказов</h1>
      <div className={styles.feed_page__content}>
        <div className={styles.feed_page__list}>list</div>
        <div className={styles.feed_page__info}>
          <OrdersProgress>
            <>
              <OrdersProgressList
                title={"Готовы:"}
                list={[
                  "034533",
                  "034532",
                  "034533",
                  "034532",
                  "034533",
                  "034532",
                  "034533",
                  "034532",
                ]}
                success={true}
              />
              <OrdersProgressList title={"В работе:"} list={["034538", "034541"]} success={false} />
            </>
          </OrdersProgress>
          <SuccessfulOrders title={"Выполнено за все время:"} quantity={"28 752"} />
          <SuccessfulOrders title={"Выполнено за сегодня:"} quantity={"138"} />
        </div>
      </div>
    </section>
  );
};
