import { OrdersProgress } from "../../components/orders-progress/orders-progress";
import { SuccessfulOrders } from "../../components/successful-orders/successful-orders";
import styles from "./feed.module.scss";
import { OrdersProgressList } from "../../components/orders-progress-list/orders-progress-list";
import { FeedCard } from "../../components/feed-card/feed-card";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/constants/ws";
import { useSelector } from "../../services/hooks";
import { IOrder } from "../../utils/common-types";
import { Loader } from "../../components/loader/loader";

export const FeedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { orders, total, totalToday, loading } = useSelector((store) => store.ws.data);

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: { url: "/all", auth: false } });

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  const getOrdersByStatus = useCallback(
    (status: string) => orders.filter((item: IOrder) => item.status === status),
    [orders]
  );

  const doneOrders = getOrdersByStatus("done");
  const pendingOrders = getOrdersByStatus("pending");

  const handleOrderClick = (number: number) => {
    navigate(`/feed/${number}`, { state: { background: location } });
  };

  return loading ? (
    <Loader text={"loading..."} />
  ) : (
    <section className={styles.feed_page}>
      <h1 className="text text_type_main-large pt-10 pb-5">Лента заказов</h1>
      <div className={styles.feed_page__content}>
        <ul className={styles.feed_page__list}>
          {orders.map((item: IOrder) => (
            <FeedCard order={item} key={item._id} onClick={handleOrderClick} renderStatus={false} />
          ))}
        </ul>
        <div className={styles.feed_page__info}>
          <OrdersProgress>
            <>
              <OrdersProgressList title={"Готовы:"} list={doneOrders} success={true} />
              <OrdersProgressList title={"В работе:"} list={pendingOrders} success={false} />
            </>
          </OrdersProgress>
          <SuccessfulOrders title={"Выполнено за все время:"} quantity={total} />
          <SuccessfulOrders title={"Выполнено за сегодня:"} quantity={totalToday} />
        </div>
      </div>
    </section>
  );
};
