import { useContext, useState } from "react";
// import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.scss";
import cn from "classnames";
import BurgerConstructorCard from "../burger-constructor-card/burger-constructor-card";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { useModal } from "../../hooks/useModal";
import { IngredientsContext } from "../../context/ingredientsContext";
import Bun from "../bun/bun";
import Checkout from "../checkout/checkout";

const BurgerConstructor = () => {
  const data = useContext(IngredientsContext);
  const bun = data.find((item) => item.type === "bun");
  const ingredients = data.filter((item) => item.type !== "bun");
  const { isModalOpen, openModal, closeModal } = useModal();
  const [order, setOrder] = useState(0);

  return (
    <section className={cn(styles.burger_constructor)}>
      <div className={cn(styles.burger_constructor__combine, "pt-25")}>
        <Bun type={"top"} isLocked={true} text={"Краторная булка N-200i (верх)"} price={bun.price} thumbnail={bun.image} />

        <div className={cn(styles.burger_constructor__body, "pl-4 pr-4")}>
          {ingredients.map((item) => (
            <BurgerConstructorCard name={item.name} price={item.price} image={item.image} key={item._id} />
          ))}
        </div>

        <Bun type={"bottom"} isLocked={true} text={"Краторная булка N-200i (низ)"} price={bun.price} thumbnail={bun.image} />
      </div>

      <Checkout openModal={openModal} ingredients={ingredients} bun={bun} setOrder={setOrder} />

      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <OrderDetails order={order} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
