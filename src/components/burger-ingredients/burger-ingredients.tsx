import styles from "./burger-ingredients.module.scss";
import { useState, useRef, useMemo } from "react";
import cn from "classnames";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredientCard } from "../burger-ingredient-card/burger-ingredient-card";
import { memo } from "react";
import { useSelector } from "../../services/hooks";
import { Loader } from "../loader/loader";
import { IIngredient } from "../../utils/interfaces";
import { RefObject } from "react";

export const BurgerIngredients = memo(() => {
  const { loading, error, data } = useSelector((store) => store.burgerIngredients);
  const bunItems = useMemo(() => data.filter((item) => item.type === "bun"), [data]);
  const sauceItems = useMemo(() => data.filter((item) => item.type === "sauce"), [data]);
  const mainItems = useMemo(() => data.filter((item) => item.type === "main"), [data]);
  const bunBoxRef = useRef<HTMLDivElement>(null);
  const sauceBoxRef = useRef<HTMLDivElement>(null);
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const ingredientsBoxRef = useRef<HTMLDivElement>(null);

  const scrollToElement = (ref: RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [current, setCurrent] = useState<"bun" | "sauce" | "main">("bun");

  const ingredientsScroll = () => {
    if (
      bunBoxRef.current &&
      sauceBoxRef.current &&
      mainBoxRef.current &&
      ingredientsBoxRef.current
    ) {
      const bunBox = Math.round(bunBoxRef.current.getBoundingClientRect().y);
      const sauceBox = Math.round(sauceBoxRef.current.getBoundingClientRect().y);
      const mainBox = Math.round(mainBoxRef.current.getBoundingClientRect().y);
      const pos = Math.round(ingredientsBoxRef.current.getBoundingClientRect().y);

      if (pos >= bunBox && pos < sauceBox) setCurrent("bun");
      else if (pos >= sauceBox && pos < mainBox) setCurrent("sauce");
      else if (pos >= mainBox) setCurrent("main");
    }
  };

  return (
    <>
      {loading || error ? (
        <Loader text={loading ? "loading..." : "error"} />
      ) : (
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
          <div
            className={styles.ingredients__body}
            onScroll={ingredientsScroll}
            ref={ingredientsBoxRef}
          >
            <div className={styles.ingredients__group} ref={bunBoxRef}>
              <h2 className="text text_type_main-medium">Булки</h2>
              <ul className={styles.ingredients__list}>
                {bunItems.map((item: IIngredient) => (
                  <BurgerIngredientCard ingredient={item} key={item._id} />
                ))}
              </ul>
            </div>
            <div className={styles.ingredients__group} ref={sauceBoxRef}>
              <h2 className="text text_type_main-medium">Соусы</h2>
              <ul className={styles.ingredients__list}>
                {sauceItems.map((item: IIngredient) => (
                  <BurgerIngredientCard ingredient={item} key={item._id} />
                ))}
              </ul>
            </div>
            <div className={styles.ingredients__group} ref={mainBoxRef}>
              <h2 className="text text_type_main-medium">Начинки</h2>
              <ul className={styles.ingredients__list}>
                {mainItems.map((item: IIngredient) => (
                  <BurgerIngredientCard ingredient={item} key={item._id} />
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
});
