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
import { IOrder, IUpdatedOrder } from "../../utils/interfaces";
import { Loader } from "../../components/loader/loader";
import { useOrdersCombaine } from "../../hooks/useOrdersCombaine";
import { setCurrentOrderAction } from "../../services/actions/current-order";

export const FeedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: { url: "/all", auth: false } });

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  const { orders, total, totalToday } = useSelector((store) => store.ws.feedOrders);
  const { loading } = useSelector((store) => store.ws);
  const { data } = useSelector((store) => store.ingredients);

  const { upgradedOrders, upgradeOrders, setInitialOrders } = useOrdersCombaine({
    orders,
    data,
  });

  useEffect(() => {
    upgradeOrders();
    setInitialOrders((updatedOrders) => updatedOrders);
  }, [upgradeOrders, setInitialOrders, orders, data]);

  const getOrdersByStatus = useCallback(
    (status: string) => orders.filter((item: IOrder) => item.status === status),
    [orders]
  );

  const doneOrders = getOrdersByStatus("done");
  const pendingOrders = getOrdersByStatus("pending");

  const handleOrderClick = (order: IUpdatedOrder) => {
    dispatch(setCurrentOrderAction(order));

    navigate(`/feed/${order.number}`, { state: { background: location } });
  };

  return loading ? (
    <Loader text={"loading..."} />
  ) : (
    <section className={styles.feed_page}>
      <h1 className="text text_type_main-large pt-10 pb-5">Лента заказов</h1>
      <div className={styles.feed_page__content}>
        <ul className={styles.feed_page__list}>
          {upgradedOrders.map((item) => (
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
