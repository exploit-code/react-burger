import styles from "./burger-ingredients.module.scss";
import { useState, useRef } from "react";
import cn from "classnames";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientCard from "../burger-ingredient-card/burger-ingredient-card";
import PropTypes from "prop-types";

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = useState("bun");

  const filteredData = {
    bunItems: data.filter((filterItem) => filterItem.type === "bun"),
    sauceItems: data.filter((filterItem) => filterItem.type === "sauce"),
    mainItems: data.filter((filterItem) => filterItem.type === "main"),
  };

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
            {filteredData.bunItems.map((item) => (
              <BurgerIngredientCard image={item.image} price={item.price} name={item.name} key={item._id} />
            ))}
          </ul>
        </div>
        <div className={styles.ingredients__group} ref={sauceBoxRef}>
          <h2 className="text text_type_main-medium">Соусы</h2>
          <ul className={styles.ingredients__list}>
            {filteredData.sauceItems.map((item) => (
              <BurgerIngredientCard image={item.image} price={item.price} name={item.name} key={item._id} />
            ))}
          </ul>
        </div>
        <div className={styles.ingredients__group} ref={mainBoxRef}>
          <h2 className="text text_type_main-medium">Начинки</h2>
          <ul className={styles.ingredients__list}>
            {filteredData.mainItems.map((item) => (
              <BurgerIngredientCard image={item.image} price={item.price} name={item.name} key={item._id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerIngredients;
