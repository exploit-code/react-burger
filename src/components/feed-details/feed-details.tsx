import classNames from "classnames";
import styles from "./feed-details.module.scss";
import { IngredientPrice } from "../ingredient-price/ingredient-price";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useOrdersCombaine } from "../../hooks/useOrdersCombaine";

export const FeedDetails = () => {
  const { number } = useParams<string>();
  // const { order } = useSelector((store) => store.currentOrder);

  const { feedOrders } = useSelector((store) => store.ws);
  // const { userOrders } = useSelector((store) => store.ws);

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

  return viewOrder ? (
    <article className={styles.feed_details}>
      <div className={styles.feed_details__head}>
        <h3 className="text text_type_main-medium">{viewOrder.name}</h3>
        <span className={classNames(styles.feed_details__status, "text text_type_main-default")}>
          {viewOrder.upgradeStatus}
        </span>
      </div>

      <div className={styles.feed_details__body}>
        <h3 className="text text_type_main-medium">Состав:</h3>
        <ul className={styles.feed_details__list}>
          {viewOrder.ingredients.map((item, index: number) => (
            <li className={styles.feed_details__item} key={index}>
              <div className={styles.feed_details__item_ingredient}>
                <div className={styles.feed_details__image}>
                  <img
                    className={styles.feed_details__image_src}
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <h4 className="text text_type_main-default">{item.name}</h4>
              </div>

              <div className={styles.feed_details__item_price}>
                <span className="text text_type_digits-default">{item.count}</span>
                <span className="text text_type_digits-default">x</span>
                <IngredientPrice price={item.price} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.feed_details__footer}>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(viewOrder.createdAt)}
        />
        <IngredientPrice price={viewOrder.totalPrice} />
      </div>
    </article>
  ) : null;
};
