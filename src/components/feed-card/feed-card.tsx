import classNames from "classnames";
import styles from "./feed-card.module.scss";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { GroupPreview } from "../group-preview/group-preview";
import { useSelector } from "../../services/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { IngredientPrice } from "../ingredient-price/ingredient-price";

export const FeedCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useSelector((store) => store.ingredients);

  const handleIngredientClick = () => {
    navigate(`/feed/${1}`, { state: { background: location } });
  };

  return (
    <li className={styles.order_card} onClick={handleIngredientClick}>
      <div className={styles.order_card__box}>
        <span className="text text_type_digits-default">#034535</span>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date("2023-12-21T14:43:22.587Z")}
        />
      </div>
      <div className={classNames(styles.order_card__box, "text text_type_main-medium")}>
        Interstellar бургер
      </div>
      <div className={styles.order_card__box}>
        <GroupPreview ingredients={data} />
        <IngredientPrice price={123} />
      </div>
    </li>
  );
};
