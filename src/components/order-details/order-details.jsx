import styles from "./order-details.module.scss";
import cn from "classnames";
import orderDetailsImage from "../../images/order-popup-image.svg";

const OrderDetails = () => {
  return (
    <section className={styles.order_details}>
      <p className={cn(styles.order_details__tablo, "text text_type_digits-large mb-8")}>034536</p>
      <p className="mb-15 text text_type_main-medium">идентификатор заказа</p>
      <img className={cn(styles.order_details__image, "mb-15")} src={orderDetailsImage} alt="order-accepted-img" />
      <p className="mb-2 text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </section>
  );
};

export default OrderDetails;
