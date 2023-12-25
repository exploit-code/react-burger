import styles from "./feed-details.module.scss";
import { FeedDetails } from "../../components/feed-details/feed-details";
import { NotFoundPage } from "../not-found/not-found";
import { useSelector } from "../../services/hooks";
import { useUpgradeOrders } from "../../hooks/useOrders";
import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

export const FeedDetailsPage = () => {
  const { id } = useParams<string>();
  const { data } = useSelector((store) => store.ingredients);
  const { orders } = useSelector((store) => store.ws.data);

  const { upgradedOrders, upgradeOrders, setInitialOrders } = useUpgradeOrders({
    orders,
    data,
  });

  useEffect(() => {
    upgradeOrders();
    setInitialOrders((updatedOrders) => updatedOrders);
  }, [upgradeOrders, setInitialOrders, orders, data]);

  const searchOrder: any = useMemo(
    () => upgradedOrders.find((el: any) => el.number === id),
    [id, upgradedOrders]
  );

  console.log("FeedDetailsPage", searchOrder, upgradedOrders);

  return searchOrder ? (
    <section className={styles.feed_details_page}>
      <h2 className="text text_type_main-large">number</h2>
      <FeedDetails />
    </section>
  ) : (
    <NotFoundPage />
  );
};
