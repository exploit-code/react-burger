import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./checkout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getOrderNumber } from "../../services/actions/order-details";
import { useNavigate } from "react-router-dom";
import { IConstructorIngredient, ICheckoutProps } from "../../utils/types";

export const Checkout = ({ openModal }: ICheckoutProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ingredients, bun }: any = useSelector((store: any) => store.constructorIngredients);
  const ingredientsID = {
    ingredients: ingredients.map((item: IConstructorIngredient): string => item._id),
  };
  const { accessToken }: any = useSelector((store: any) => store.auth);

  const handleOrderClick = () => {
    if (accessToken && openModal && ingredients && bun) {
      //@ts-ignore: in the next sprint
      dispatch(getOrderNumber(ingredientsID));
      openModal();
    } else navigate("/login");
  };

  const ingredientsPrice = ingredients.reduce(
    (acc: number, ingredient: IConstructorIngredient): number => acc + ingredient.price,
    0
  );
  const bunPrice = bun ? bun.price : 0;
  const totalPrice = ingredientsPrice + bunPrice * 2;

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
