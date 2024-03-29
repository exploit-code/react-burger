import styles from "./burger-constructor.module.scss";
import cn from "classnames";
import { BurgerConstructorCard } from "../burger-constructor-card/burger-constructor-card";
import { OrderDetails } from "../order-details/order-details";
import { Modal } from "../modal/modal";
import { Bun } from "../bun/bun";
import { Checkout } from "../checkout/checkout";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { addIngridient } from "../../services/actions/burger-constructor";
import { useDispatch, useSelector } from "../../services/hooks/index";
import { useModal } from "../../hooks/useModal";
import { IConstructorIngredient } from "../../utils/interfaces";

export const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { ingredients, bun } = useSelector((store) => store.burgerConstructor);
  const { isModalOpen, openModal, closeModal } = useModal();

  const [{ isHover }, ingredientsRef] = useDrop({
    accept: "ingredients",
    collect: (monitor: DropTargetMonitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient: IConstructorIngredient) {
      dispatch(addIngridient(ingredient));
    },
  });

  const borderColor = isHover ? "lightgreen" : "#3A3A55";

  return (
    <section className={cn(styles.burger_constructor)}>
      <div
        className={cn(styles.burger_constructor__combine)}
        ref={ingredientsRef}
        style={{ borderColor }}
        data-testid="burger_constructor"
      >
        <div
          className={cn(styles.burger_constructor__bun, styles.burger_constructor__bun_top)}
          data-testid="burger_constructor__bun_top"
        >
          {bun && (
            <Bun
              type={"top"}
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>

        <ul
          className={cn(styles.burger_constructor__ingredients)}
          data-testid="burger_constructor__ingredients"
        >
          {ingredients.map((item: IConstructorIngredient, index: number) => (
            <BurgerConstructorCard ingredient={item} key={item.uuid} index={index} />
          ))}
        </ul>

        <div
          className={cn(styles.burger_constructor__bun, styles.burger_constructor__bun_bottom)}
          data-testid="burger_constructor__bun_bottom"
        >
          {bun && (
            <Bun
              type={"bottom"}
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
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
