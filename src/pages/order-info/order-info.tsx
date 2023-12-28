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
  const { orders } = useSelector((store) => store.orderInfo.info);
  const { updatedOrders, loading, error } = useSelector((store) => store.combineOrders);
  const foundOrder = updatedOrders.find((order) => order.number === Number(number));
  let responseFlag = false;
  let requestOrder = updatedOrders[0];

  useEffect(() => {
    if (!foundOrder) {
      dispatch(getOrderInfoThunk(number));
    }
  }, [dispatch, number, foundOrder]);

  useEffect(() => {
    if (data && orders && responseFlag) {
      dispatch(combineOrdersUpdatedAction({ orders, data }));
      try {
        dispatch(combineOrdersCompliteAction());
        if (requestOrder) dispatch(setCurrentOrderAction(requestOrder));
      } catch {
        dispatch(combineOrdersErrorAction());
      }
    }
    // return () => {
    //   dispatch(combineOrdersClearAction());
    // };
  }, [dispatch, data, orders, responseFlag, requestOrder]);

  return loading || error ? (
    <Loader text={loading ? "loading..." : "error"} />
  ) : foundOrder ? (
    <section className={styles.feed_details_page}>
      <h2 className="text text_type_main-large">
        {foundOrder ? foundOrder.number : requestOrder.number}
      </h2>
      <OrderInfo />
    </section>
  ) : (
    <NotFoundPage />
  );
};
