import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./checkout.module.scss";
import { useDispatch, useSelector } from "../../services/hooks";
import { getOrderNumberThunk } from "../../services/middleware/order-details";
import { useNavigate } from "react-router-dom";
import { IConstructorIngredient, IUseModal, IIngredientID } from "../../utils/common-types";
import { useCallback } from "react";

export const Checkout = ({ openModal }: { openModal: IUseModal["openModal"] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ingredients, bun } = useSelector((store) => store.constructorIngredients);
  const { accessToken } = useSelector((store) => store.auth);

  const allConstructorIngredients = useCallback(() => {
    return [bun, ...ingredients, bun].filter((item) => item);
  }, [ingredients, bun]);

  const ingredientsID: IIngredientID = {
    ingredients: allConstructorIngredients()
      .map((item) => item?._id)
      .filter(Boolean),
  };

  const handleOrderClick = () => {
    if (accessToken && ingredients && bun) {
      dispatch(getOrderNumberThunk(ingredientsID, accessToken));
      openModal();
    } else navigate("/login");
  };

  const ingredientsPrice = ingredients.reduce(
    (acc: number, item: IConstructorIngredient) => acc + item.price,
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
