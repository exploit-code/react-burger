import styles from "./feed-details.module.scss";
import { OrderInfo } from "../../components/order-info/order-info";
import { NotFoundPage } from "../not-found/not-found";
import { useSelector } from "../../services/hooks";
import { useOrdersCombaine } from "../../hooks/useOrdersCombaine";
import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

export const FeedDetailsPage = () => {
  const { number } = useParams<string>();
  const { feedOrders } = useSelector((store) => store.ws);
  const { data } = useSelector((store) => store.ingredients);

  const { upgradedOrders, upgradeOrders, setInitialOrders } = useOrdersCombaine({
    orders: feedOrders.orders,
    data,
  });

  useEffect(() => {
    upgradeOrders();
    setInitialOrders((updatedOrders) => updatedOrders);
  }, [upgradeOrders, setInitialOrders, feedOrders, data]);

  const viewOrder = useMemo(
    () => upgradedOrders.find((el) => el.number === Number(number)),
    [upgradedOrders, number]
  );

  useEffect(() => {
    if (viewOrder && Number(number) !== viewOrder.number) {
      console.log("Order not found");
    }
  }, [viewOrder, number]);

  return viewOrder ? (
    <section className={styles.feed_details_page}>
      <h2 className="text text_type_main-large">{viewOrder.number}</h2>
      <OrderInfo />
    </section>
  ) : (
    <NotFoundPage />
  );
};
