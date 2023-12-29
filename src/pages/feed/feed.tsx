import { OrdersProgress } from "../../components/orders-progress/orders-progress";
import { SuccessfulOrders } from "../../components/successful-orders/successful-orders";
import styles from "./feed.module.scss";
import { OrdersProgressList } from "../../components/orders-progress-list/orders-progress-list";
import { OrderCard } from "../../components/order-card/order-card";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useDispatch } from "../../services/hooks";
import { useSelector } from "../../services/hooks";
import { IUpdatedOrder } from "../../utils/interfaces";
import { Loader } from "../../components/loader/loader";
import { setCurrentOrder } from "../../services/actions/current-order";
import {
  combineOrdersComplite,
  combineOrdersError,
  combineOrdersUpdated,
} from "../../services/actions/combine-orders";
import { wsConnectionFeedClosed, wsConnectionFeedStart } from "../../services/actions/web-socket";

export const FeedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { orders, total, totalToday } = useSelector((store) => store.webSocket.feedOrders);
  const { data } = useSelector((store) => store.burgerIngredients);
  const { updatedOrders, loading, error } = useSelector((store) => store.combineOrders);

  useEffect(() => {
    dispatch(wsConnectionFeedStart());

    return () => {
      dispatch(wsConnectionFeedClosed());
    };
  }, [dispatch]);

  const getOrdersByStatus = useCallback(
    (status: string) => orders.filter((item) => item.status === status),
    [orders]
  );

  const doneOrders = getOrdersByStatus("done");
  const pendingOrders = getOrdersByStatus("pending");

  const handleOrderClick = (order: IUpdatedOrder) => {
    dispatch(setCurrentOrder(order));

    navigate(`/feed/${order.number}`, { state: { background: location } });
  };

  useEffect(() => {
    dispatch(combineOrdersUpdated({ orders, data }));
    try {
      if (orders && data) {
        dispatch(combineOrdersComplite());
      }
    } catch {
      dispatch(combineOrdersError());
    }
  }, [data, orders, dispatch]);

  return loading || error ? (
    <Loader text={loading ? "loading..." : "error"} />
  ) : (
    <section className={styles.feed_page}>
      <h1 className="text text_type_main-large pt-10 pb-5">Лента заказов</h1>
      <div className={styles.feed_page__content}>
        <ul className={styles.feed_page__list}>
          {updatedOrders.map((item) => (
            <OrderCard
              order={item}
              key={item._id}
              onClick={handleOrderClick}
              renderStatus={false}
            />
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
