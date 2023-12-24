import styles from "./profile-orders.module.scss";
import { SiteBar } from "../../components/sidebar/sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from "../../services/constants/ws";
import { useDispatch, useSelector } from "../../services/hooks";
import { IOrder } from "../../utils/common-types";
import { FeedCard } from "../../components/feed-card/feed-card";
import { Loader } from "../../components/loader/loader";
import { useUpgradeOrders } from "../../hooks/useOrders";
import { setCurrentOrderAction } from "../../services/actions/current-order";

export const ProfileOrdersPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { accessToken } = useSelector((store) => store.auth);
  const { orders, loading } = useSelector((store) => store.ws.data);
  const { data } = useSelector((store) => store.ingredients);

  const { upgradedOrders, upgradeOrders, setInitialOrders } = useUpgradeOrders({
    orders,
    data,
  });

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: { url: `?token=${accessToken}`, auth: true } });

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch, accessToken]);

  useEffect(() => {
    upgradeOrders();
    setInitialOrders((updatedOrders) => updatedOrders);
  }, [upgradeOrders, setInitialOrders, orders, data]);

  const handleOrderClick = (order: any) => {
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
          upgradedOrders
            .reverse()
            .map((item: IOrder) => (
              <FeedCard
                order={item}
                key={item._id}
                onClick={handleOrderClick}
                renderStatus={true}
              />
            ))
        )}
      </ul>
    </section>
  );
};
