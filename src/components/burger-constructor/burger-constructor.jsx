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
import { ADD_INGREDIENT, MOVE_INGREDIENT } from "../../services/actions/burger-constructor";
import { useDispatch, useSelector } from "react-redux";

const BurgerConstructor = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();
  const { ingredients, bun } = useSelector((store) => store.constructorIngredients);

  const [{ isHover }, ingredientsRef] = useDrop({
    accept: "ingredients",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      dispatch({ type: ADD_INGREDIENT, payload: ingredient });
    },
  });

  const [, moveIngredientsRef] = useDrop({
    accept: "moveIngredients",
    drop(ingredient) {
      dispatch({ type: MOVE_INGREDIENT, payload: ingredient });
    },
  });

  const borderColor = isHover ? "lightgreen" : "#3A3A55";

  return (
    <section className={cn(styles.burger_constructor)}>
      <div className={cn(styles.burger_constructor__combine)} ref={ingredientsRef} style={{ borderColor }}>
        <div className={cn(styles.burger_constructor__bun, styles.burger_constructor__bun_top)}>
          {bun && <Bun type={"top"} isLocked={true} text={"Краторная булка N-200i (верх)"} price={bun.price} thumbnail={bun.image} />}
        </div>

        <ul className={cn(styles.burger_constructor__ingredients)} ref={moveIngredientsRef}>
          {ingredients.map((item) => (
            <BurgerConstructorCard ingredient={item} key={uuidv4()} />
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
