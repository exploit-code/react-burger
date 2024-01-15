import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./checkout.module.scss";
import { useDispatch, useSelector } from "../../services/hooks";
import { getOrderNumberThunk } from "../../services/thunk/order-details";
import { useNavigate } from "react-router-dom";
import { IUseModal, IIngredientID } from "../../utils/interfaces";
import { useCallback } from "react";

export const Checkout = ({ openModal }: { openModal: IUseModal["openModal"] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ingredients, bun } = useSelector((store) => store.burgerConstructor);
  const { authorized } = useSelector((store) => store.auth);

  const allConstructorIngredients = useCallback(() => {
    return [bun, ...ingredients, bun].filter((item) => item);
  }, [ingredients, bun]);

  const ingredientsID: IIngredientID = {
    ingredients: allConstructorIngredients()
      .map((item) => item?._id)
      .filter(Boolean),
  };

  const handleOrderClick = () => {
    if (authorized && ingredients && bun) {
      dispatch(getOrderNumberThunk(ingredientsID));
      openModal();
    } else navigate("/login");
  };

  const ingredientsPrice = ingredients.reduce((acc, item) => acc + item.price, 0);
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
        data-testid="checkout_button"
      >
        Оформить заказ
      </Button>
    </div>
  );
};
