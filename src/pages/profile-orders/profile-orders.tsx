import styles from "./profile-orders.module.scss";
import { SiteBar } from "../../components/sidebar/sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from "../../services/constants/ws";
import { useDispatch, useSelector } from "../../services/hooks";
import { IUpdatedOrder } from "../../utils/interfaces";
import { OrderCard } from "../../components/order-card/order-card";
import { Loader } from "../../components/loader/loader";
import { useOrdersCombaine } from "../../hooks/useOrdersCombaine";
import { setCurrentOrderAction } from "../../services/actions/current-order";
import { getCookie } from "../../utils/cookies";

export const ProfileOrdersPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.ws.userOrders);
  const { loading } = useSelector((store) => store.ws);
  const { data } = useSelector((store) => store.ingredients);

  const { upgradedOrders, upgradeOrders, setInitialOrders } = useOrdersCombaine({
    orders,
    data,
  });

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: { url: `?token=${getCookie("accessToken")}`, auth: true },
    });

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  useEffect(() => {
    upgradeOrders();
    setInitialOrders((updatedOrders) => updatedOrders);
  }, [upgradeOrders, setInitialOrders, orders, data]);

  const handleOrderClick = (order: IUpdatedOrder) => {
    dispatch(setCurrentOrderAction(order));

    navigate(`/profile/orders/${order.number}`, { state: { background: location } });
  };

  return (
    <section className={styles.profile_orders}>
      <div className={styles.profile_orders__sitebar}>
        <SiteBar />
        <p className={"text text_type_main-default text_color_inactive"}>
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </div>
      <ul className={styles.profile_orders__list}>
        {loading ? (
          <Loader text={"loading..."} />
        ) : (
          upgradedOrders.map((item: IUpdatedOrder) => (
            <OrderCard order={item} key={item._id} onClick={handleOrderClick} renderStatus={true} />
          ))
        )}
      </ul>
    </section>
  );
};
