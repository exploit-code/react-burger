import styles from "./profile-orders.module.scss";
import { SiteBar } from "../../components/sidebar/sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from "../../services/constants/web-socket";
import { useDispatch, useSelector } from "../../services/hooks";
import { IUpdatedOrder } from "../../utils/interfaces";
import { OrderCard } from "../../components/order-card/order-card";
import { Loader } from "../../components/loader/loader";
import { setCurrentOrderAction } from "../../services/actions/current-order";
import {
  combineOrdersCompliteAction,
  combineOrdersErrorAction,
  combineOrdersUpdatedAction,
} from "../../services/actions/combine-orders";
import { getCookie } from "../../utils/cookies";

export const ProfileOrdersPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { updatedOrders, loading, error } = useSelector((store) => store.combineOrders);
  const { orders } = useSelector((store) => store.webSocket.userOrders);
  const { data } = useSelector((store) => store.burgerIngredients);

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: { path: `?token=${getCookie("accessToken")}`, auth: true },
    });

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  const handleOrderClick = (order: IUpdatedOrder) => {
    dispatch(setCurrentOrderAction(order));
    navigate(`/profile/orders/${order.number}`, { state: { background: location } });
  };

  useEffect(() => {
    dispatch(combineOrdersUpdatedAction({ orders, data }));
    try {
      dispatch(combineOrdersCompliteAction());
    } catch {
      dispatch(combineOrdersErrorAction());
    }
  }, [data, orders, dispatch]);

  return (
    <section className={styles.profile_orders}>
      <div className={styles.profile_orders__sitebar}>
        <SiteBar />
        <p className={"text text_type_main-default text_color_inactive"}>
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </div>
      <ul className={styles.profile_orders__list}>
        {loading || error ? (
          <Loader text={loading ? "loading..." : "error"} />
        ) : (
          updatedOrders.map((item: IUpdatedOrder) => (
            <OrderCard order={item} key={item._id} onClick={handleOrderClick} renderStatus={true} />
          ))
        )}
      </ul>
    </section>
  );
};
