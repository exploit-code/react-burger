import PropTypes from "prop-types";
import { Button, CurrencyIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.scss";
import cn from "classnames";
import BurgerConstructorCard from "../burger-constructor-card/burger-constructor-card";

const BurgerConstructor = ({ data }) => {
  const filteredData = {
    bunItems: data.find((filterItem) => filterItem.type === "bun"),
    ingredientsItems: data.filter((filterItem) => filterItem.type !== "bun"),
  };

  const getFullPrice = filteredData.ingredientsItems.reduce((acc, item) => {
    return acc + item.price;
  }, filteredData.bunItems.price * 2);

  return (
    <section className={cn(styles.constructor)}>
      <div className={cn(styles.constructor__combine, "pt-25")}>
        <div className={cn(styles.constructor__head)}>
          <ConstructorElement type="top" isLocked={true} text="Краторная булка N-200i (верх)" price={filteredData.bunItems.price} thumbnail={filteredData.bunItems.image} />
        </div>
        <div className={cn(styles.constructor__body, "pl-4 pr-4")}>
          {filteredData.ingredientsItems.map((item) => (
            <BurgerConstructorCard name={item.name} price={item.price} image={item.image} key={item._id} />
          ))}
        </div>
        <div className={styles.constructor__footer}>
          <ConstructorElement type="bottom" isLocked={true} text="Краторная булка N-200i (низ)" price={200} thumbnail={filteredData.bunItems.image} />
        </div>
      </div>
      <div className={styles.constructor__checkout}>
        <div className={styles.constructor__price}>
          <span className="text text_type_digits-medium">{getFullPrice}</span>
          <CurrencyIcon type="primary" width={36} height={36} />
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
