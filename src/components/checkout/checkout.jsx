import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./checkout.module.scss";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/prop-types";

const Checkout = ({ openModal, ingredients, bun, setOrder }) => {
  const currentBurgerIngredients = [bun, ...ingredients, bun];
  const totalPrice = currentBurgerIngredients.reduce((acc, item) => acc + item.price, 0);
  const ingredientsID = { ingredients: currentBurgerIngredients.map((item) => item._id) };
  const apiURL = "https://norma.nomoreparties.space/api/orders";

  const getOrderNumber = () => {
    fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(ingredientsID),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        else return res.json();
      })
      .then((result) => setOrder(result.order.number))
      .catch((error) => console.log(error));
  };

  const handleOrderClick = () => {
    openModal();
    getOrderNumber();
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__price}>
        <span className="text text_type_digits-medium">{totalPrice}</span>
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
  ingredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,
  bun: PropTypes.shape(ingredientType).isRequired,
};

export default Checkout;
