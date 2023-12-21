import classNames from "classnames";
import styles from "./order-card.module.scss";
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { GroupPreview } from "../group-preview/group-preview";
import { useSelector } from "../../services/hooks";

export const OrderCard = () => {
  const { data } = useSelector((store) => store.ingredients);

  return (
    <li className={styles.order_card}>
      <div className={styles.order_card__box}>
        <span className="text text_type_digits-default">#034535</span>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date("2021-06-23T14:43:22.587Z")}
        />
      </div>
      <div className={classNames(styles.order_card__box, "text text_type_main-medium")}>
        Interstellar бургер
      </div>
      <div className={styles.order_card__box}>
        <GroupPreview ingredients={data} />
        <div className={styles.order_card__price}>
          <span className="text text_type_digits-default">480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
};
