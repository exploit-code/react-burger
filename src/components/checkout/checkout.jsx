import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./checkout.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getOrderNumber } from "../../services/actions/order-details";
import { useNavigate } from "react-router-dom";

export const Checkout = ({ openModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ingredients, bun } = useSelector((store) => store.constructorIngredients);
  const ingredientsID = { ingredients: ingredients.map((item) => item._id) };
  const { accessToken } = useSelector((store) => store.auth);

  const handleOrderClick = () => {
    if (accessToken) {
      openModal();
      dispatch(getOrderNumber(ingredientsID));
    } else navigate("/login");
  };

  const ingredientsPrice = ingredients.reduce((total, ingredient) => total + ingredient.price, 0);
  const bunPrice = bun ? bun.price : 0;
  const totalPrice = ingredientsPrice + bunPrice * 2;

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__price}>
        <span className="text text_type_digits-medium">{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick} disabled={!(ingredients.length && bun)}>
        Оформить заказ
      </Button>
    </div>
  );
};

Checkout.propTypes = {
  openModal: PropTypes.func.isRequired,
};
