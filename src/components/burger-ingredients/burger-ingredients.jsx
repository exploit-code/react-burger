import styles from "./burger-ingredients.module.scss";
import { useState, useRef, useMemo } from "react";
import cn from "classnames";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientCard from "../burger-ingredient-card/burger-ingredient-card";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/prop-types";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { useModal } from "../../hooks/useModal";
import { memo } from "react";

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = useState("bun");
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const { isModalOpen, openModal, closeModal } = useModal();

  const bunItems = useMemo(() => data.filter((filterItem) => filterItem.type === "bun"), [data]);
  const sauceItems = useMemo(() => data.filter((filterItem) => filterItem.type === "sauce"), [data]);
  const mainItems = useMemo(() => data.filter((filterItem) => filterItem.type === "main"), [data]);

  const bunBoxRef = useRef(null);
  const sauceBoxRef = useRef(null);
  const mainBoxRef = useRef(null);

  const scrollToElement = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className={styles.ingredients}>
      <div className={cn(styles.ingredients__head, "pt-10 pb-10")}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <div className={styles.ingredients__tabs}>
          <Tab
            value="bun"
            active={current === "bun"}
            onClick={() => {
              setCurrent("bun");
              scrollToElement(bunBoxRef);
            }}
          >
            Булки
          </Tab>
          <Tab
            value="sauce"
            active={current === "sauce"}
            onClick={() => {
              setCurrent("sauce");
              scrollToElement(sauceBoxRef);
            }}
          >
            Соусы
          </Tab>
          <Tab
            value="main"
            active={current === "main"}
            onClick={() => {
              setCurrent("main");
              scrollToElement(mainBoxRef);
            }}
          >
            Начинки
          </Tab>
        </div>
      </div>

      <div className={styles.ingredients__body}>
        <div className={styles.ingredients__group} ref={bunBoxRef}>
          <h2 className="text text_type_main-medium">Булки</h2>
          <ul className={styles.ingredients__list}>
            {bunItems.map((item) => (
              <BurgerIngredientCard ingredient={item} setCurrentIngredient={setCurrentIngredient} openModal={openModal} key={item._id} />
            ))}
          </ul>
        </div>
        <div className={styles.ingredients__group} ref={sauceBoxRef}>
          <h2 className="text text_type_main-medium">Соусы</h2>
          <ul className={styles.ingredients__list}>
            {sauceItems.map((item) => (
              <BurgerIngredientCard ingredient={item} setCurrentIngredient={setCurrentIngredient} openModal={openModal} key={item._id} />
            ))}
          </ul>
        </div>
        <div className={styles.ingredients__group} ref={mainBoxRef}>
          <h2 className="text text_type_main-medium">Начинки</h2>
          <ul className={styles.ingredients__list}>
            {mainItems.map((item) => (
              <BurgerIngredientCard ingredient={item} setCurrentIngredient={setCurrentIngredient} openModal={openModal} key={item._id} />
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <Modal title={"Детали ингредиента"} closeModal={closeModal}>
          <IngredientDetails currentIngredient={currentIngredient} />
        </Modal>
      )}
    </section>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,
};

export default memo(BurgerIngredients);
