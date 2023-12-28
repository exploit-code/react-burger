import styles from "./order-info.module.scss";
import { OrderInfo } from "../../components/order-info/order-info";
import { NotFoundPage } from "../not-found/not-found";
import { useDispatch, useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOrderInfoThunk } from "../../services/thunk/order-info";
import { setCurrentOrder } from "../../services/actions/current-order";
import {
  combineOrdersComplite,
  combineOrdersError,
  combineOrdersUpdated,
} from "../../services/actions/combine-orders";
import { Loader } from "../../components/loader/loader";

export const OrderInfoPage = () => {
  const dispatch = useDispatch();
  const { number } = useParams<string>();
  const { data } = useSelector((store) => store.burgerIngredients);
  const { requestOrder } = useSelector((store) => store.orderInfo);
  const { updatedOrders, loading, error } = useSelector((store) => store.combineOrders);
  const foundOrder = updatedOrders.find((order) => order.number === Number(number));

  useEffect(() => {
    if (foundOrder) {
      dispatch(setCurrentOrder(foundOrder));
    } else {
      if (number) dispatch(getOrderInfoThunk(number));
    }
  }, [dispatch, number, foundOrder]);

  useEffect(() => {
    if (requestOrder.number === Number(number)) {
      dispatch(combineOrdersUpdated({ orders: [requestOrder], data }));
      try {
        dispatch(combineOrdersComplite());
      } catch {
        dispatch(combineOrdersError());
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
