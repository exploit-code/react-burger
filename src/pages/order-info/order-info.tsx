import styles from "./order-info.module.scss";
import { OrderInfo } from "../../components/order-info/order-info";
import { NotFoundPage } from "../not-found/not-found";
import { useDispatch, useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOrderInfoThunk } from "../../services/middleware/order-info";
import { setCurrentOrderAction } from "../../services/actions/current-order";
import {
  combineOrdersClearAction,
  combineOrdersCompliteAction,
  combineOrdersErrorAction,
  combineOrdersUpdatedAction,
} from "../../services/actions/combine-orders";
import { Loader } from "../../components/loader/loader";

export const OrderInfoPage = () => {
  const dispatch = useDispatch();
  const { number } = useParams<string>();
  const { data } = useSelector((store) => store.ingredients);
  const { requestOrder } = useSelector((store) => store.orderInfo);
  const { updatedOrders, loading, error } = useSelector((store) => store.combineOrders);
  const foundOrder = updatedOrders.find((order) => order.number === Number(number));

  useEffect(() => {
    if (foundOrder) {
      dispatch(setCurrentOrderAction(foundOrder));
    } else {
      dispatch(getOrderInfoThunk(number));
    }
  }, [dispatch, number, foundOrder]);

  useEffect(() => {
    if (requestOrder.number === Number(number)) {
      dispatch(combineOrdersUpdatedAction({ orders: [requestOrder], data }));
      try {
        dispatch(combineOrdersCompliteAction());
      } catch {
        dispatch(combineOrdersErrorAction());
      }
    }
  }, [dispatch, requestOrder, number, data]);

  return loading || error ? (
    <Loader text={loading ? "loading..." : "error"} />
  ) : foundOrder ? (
    <section className={styles.feed_details_page}>
      <h2 className="text text_type_main-large">{foundOrder.number}</h2>
      <OrderInfo />
    </section>
  ) : (
    <NotFoundPage />
  );
};
