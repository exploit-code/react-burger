import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./checkout.module.scss";
import { useDispatch, useSelector } from "../../services/hooks";
import { getOrderNumberThunk } from "../../services/actions/order-details";
import { useNavigate } from "react-router-dom";
import { IConstructorIngredient, IUseModal } from "../../utils/common-types";

export const Checkout = ({ openModal }: { openModal: IUseModal["openModal"] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ingredients, bun } = useSelector((store) => store.constructorIngredients);
  const ingredientsID: { ingredients: string[] } = {
    ingredients: ingredients.map((item: IConstructorIngredient): string => item._id),
  };
  const { accessToken } = useSelector((store) => store.auth);

  const handleOrderClick = () => {
    if (accessToken && ingredients && bun) {
      //@ts-ignore
      dispatch(getOrderNumberThunk(ingredientsID));
      openModal();
    } else navigate("/login");
  };

  //@ts-ignore
  const ingredientsPrice = ingredients.reduce(
    (acc: number, item: IConstructorIngredient) => acc + (item.price || 0),
    0
  );
  const bunPrice: number = bun ? bun.price : 0;
  const totalPrice: number = ingredientsPrice + bunPrice * 2;

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__price}>
        <span className="text text_type_digits-medium">{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={handleOrderClick}
        disabled={!(ingredients.length && bun)}
      >
        Оформить заказ
      </Button>
    </div>
  );
};
