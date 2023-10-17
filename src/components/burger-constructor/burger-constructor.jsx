import PropTypes from "prop-types";
import { Button, CurrencyIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.scss";
import cn from "classnames";
import BurgerConstructorCard from "../burger-constructor-card/burger-constructor-card";

const BurgerConstructor = ({ data }) => {
  const bun = data.find((item) => item.type === "bun");
  const ingredients = data.filter((item) => item.type !== "bun");
  const totalIngredientsPrice = ingredients.reduce((acc, item) => acc + item.price, 0);
  const totalBunPrice = bun ? bun.price * 2 : 0;
  const totalPrice = totalIngredientsPrice + totalBunPrice;

  return (
    <section className={cn(styles.burger_constructor)}>
      <div className={cn(styles.burger_constructor__combine, "pt-25")}>
        <div className={cn(styles.burger_constructor__head)}>
          {bun && <ConstructorElement type="top" isLocked={true} text="Краторная булка N-200i (верх)" price={bun.price} thumbnail={bun.image} />}
        </div>
        <div className={cn(styles.burger_constructor__body, "pl-4 pr-4")}>
          {ingredients.map((item) => (
            <BurgerConstructorCard name={item.name} price={item.price} image={item.image} key={item._id} />
          ))}
        </div>
        <div className={styles.burger_constructor__footer}>
          {bun && <ConstructorElement type="bottom" isLocked={true} text="Краторная булка N-200i (низ)" price={bun.price} thumbnail={bun.image} />}
        </div>
      </div>
      <div className={styles.burger_constructor__checkout}>
        <div className={styles.burger_constructor__price}>
          <span className="text text_type_digits-medium">{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerConstructor;
