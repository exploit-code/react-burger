import styles from "./order-popup.module.scss";
import cn from "classnames";
import orderPopupImage from "../../images/order-popup-image.svg";
import PropTypes from "prop-types";

import CloseButton from "../close-button/close-button";

const OrderPopUp = ({ setShowPopup }) => {
  return (
    <section className={cn(styles.order_popup, "pt-15 pr-10 pb-30 pl-10")}>
      <div className={styles.order_popup__head}>
        <CloseButton setShowPopup={setShowPopup} />
      </div>
      <div className={styles.order_popup__body}>
        <p className={cn(styles.order_popup__tablo, "text text_type_digits-large mb-8")}>034536</p>
        <p className="mb-15 text text_type_main-medium">идентификатор заказа</p>
        <img className="mb-15" src={orderPopupImage} alt="order-accepted" />
        <p className="mb-2 text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
    </section>
  );
};

OrderPopUp.propTypes = {
  setShowPopup: PropTypes.func,
};

export default OrderPopUp;
