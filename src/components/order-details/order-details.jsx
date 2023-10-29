import styles from "./order-details.module.scss";
import cn from "classnames";
import orderDetailsImage from "../../images/order-popup-image.svg";
import PropTypes from "prop-types";

const OrderDetails = ({ order }) => {
  return (
    <section className={styles.order_details}>
      <p className={cn(styles.order_details__tablo, "text text_type_digits-large mb-8")}>{order}</p>
      <p className="mb-15 text text_type_main-medium">идентификатор заказа</p>
      <img className={cn(styles.order_details__image, "mb-15")} src={orderDetailsImage} alt="order-accepted-img" />
      <p className="mb-2 text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </section>
  );
};

OrderDetails.propTypes = {
  order: PropTypes.number,
};

export default OrderDetails;
