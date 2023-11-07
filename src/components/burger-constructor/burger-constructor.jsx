import styles from "./burger-constructor.module.scss";
import cn from "classnames";
import BurgerConstructorCard from "../burger-constructor-card/burger-constructor-card";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { useModal } from "../../hooks/useModal";
import Bun from "../bun/bun";
import Checkout from "../checkout/checkout";
import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";
import { ADD_INGREDIENT } from "../../services/actions/burger-constructor";
import { useDispatch, useSelector } from "react-redux";

const BurgerConstructor = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();
  const { ingredients, bun } = useSelector((store) => store.constructorIngredients);

  const [, ingredientsRef] = useDrop({
    accept: "ingredients",
    drop(item) {
      if (item.type === "bun") {
        dispatch({ type: ADD_INGREDIENT, payload: item });
      } else {
        dispatch({ type: ADD_INGREDIENT, payload: item });
      }
    },
  });

  return (
    <section className={cn(styles.burger_constructor)}>
      <div className={cn(styles.burger_constructor__combine)} ref={ingredientsRef}>
        <div className={cn(styles.burger_constructor__bun, styles.burger_constructor__bun_top)}>
          {bun && <Bun type={"top"} isLocked={true} text={"Краторная булка N-200i (верх)"} price={bun.price} thumbnail={bun.image} />}
        </div>

        <ul className={cn(styles.burger_constructor__ingredients)}>
          {ingredients.map((item) => (
            <BurgerConstructorCard name={item.name} price={item.price} image={item.image} key={uuidv4()} />
          ))}
        </ul>

        <div className={cn(styles.burger_constructor__bun, styles.burger_constructor__bun_bottom)}>
          {bun && <Bun type={"bottom"} isLocked={true} text={"Краторная булка N-200i (низ)"} price={bun.price} thumbnail={bun.image} />}
        </div>
      </div>

      <Checkout openModal={openModal} />

      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
