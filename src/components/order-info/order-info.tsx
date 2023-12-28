import classNames from "classnames";
import styles from "./order-info.module.scss";
import { IngredientPrice } from "../ingredient-price/ingredient-price";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../services/hooks";

export const OrderInfo = () => {
  const { order } = useSelector((store) => store.currentOrder);

  return (
    order && (
      <article className={styles.feed_details}>
        <div className={styles.feed_details__head}>
          <h3 className="text text_type_main-medium">{order.name}</h3>
          <span className={classNames(styles.feed_details__status, "text text_type_main-default")}>
            {order.upgradeStatus}
          </span>
        </div>

        <div className={styles.feed_details__body}>
          <h3 className="text text_type_main-medium">Состав:</h3>
          <ul className={styles.feed_details__list}>
            {order.ingredients.map((item, index: number) => (
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
            date={new Date(order.createdAt)}
          />
          <IngredientPrice price={order.totalPrice} />
        </div>
      </article>
    )
  );
};
