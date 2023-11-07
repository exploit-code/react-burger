import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./checkout.module.scss";
import PropTypes from "prop-types";
// import { ingredientType } from "../../utils/prop-types";

import { useDispatch, useSelector } from "react-redux";
import { getOrderNumber } from "../../services/actions/order-details";

const Checkout = ({ openModal }) => {
  const dispatch = useDispatch();

  const ingredients = useSelector((store) => store.ingredients.data);

  const ingredientsID = { ingredients: ingredients.map((item) => item._id) };

  // const currentBurgerIngredients = [bun, ...ingredients, bun];
  // const totalPrice = currentBurgerIngredients.reduce((acc, item) => acc + item.price, 0);

  const handleOrderClick = () => {
    openModal();
    dispatch(getOrderNumber(ingredientsID));
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__price}>
        <span className="text text_type_digits-medium">0</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>
        Оформить заказ
      </Button>
    </div>
  );
};

Checkout.propTypes = {
  openModal: PropTypes.func.isRequired,
  // ingredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,
  // bun: PropTypes.shape(ingredientType).isRequired,
};

export default Checkout;
