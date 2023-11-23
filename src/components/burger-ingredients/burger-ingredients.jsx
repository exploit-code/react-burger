import styles from "./burger-ingredients.module.scss";
import { useState, useRef, useMemo, useEffect } from "react";
import cn from "classnames";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredientCard } from "../burger-ingredient-card/burger-ingredient-card";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { Loader } from "../loader/loader";
import { getIngredients } from "../../services/actions/burger-ingredients";
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";

export const BurgerIngredients = memo(() => {
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();
  const { ingredient } = useSelector((store) => store.currentIngredient);
  const { loading, error, data } = useSelector((store) => store.ingredients);
  const bunItems = useMemo(() => data.filter((filterItem) => filterItem.type === "bun"), [data]);
  const sauceItems = useMemo(() => data.filter((filterItem) => filterItem.type === "sauce"), [data]);
  const mainItems = useMemo(() => data.filter((filterItem) => filterItem.type === "main"), [data]);
  const bunBoxRef = useRef(null);
  const sauceBoxRef = useRef(null);
  const mainBoxRef = useRef(null);
  const ingredientsBoxRef = useRef(null);

  const scrollToElement = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [current, setCurrent] = useState("bun");

  const ingredientsScroll = () => {
    const bunBox = Math.round(bunBoxRef.current.getBoundingClientRect().y);
    const sauceBox = Math.round(sauceBoxRef.current.getBoundingClientRect().y);
    const mainBox = Math.round(mainBoxRef.current.getBoundingClientRect().y);
    const pos = Math.round(ingredientsBoxRef.current.getBoundingClientRect().y);

    if (bunBox && sauceBox && mainBox) {
      if (pos >= bunBox && pos < sauceBox) setCurrent("bun");
      else if (pos >= sauceBox && pos < mainBox) setCurrent("sauce");
      else if (pos >= mainBox) setCurrent("main");
    }
  };

  useEffect(() => dispatch(getIngredients()), [dispatch]);

  return (
    <>
      {loading || error ? (
        <Loader text={loading ? "loading" : "error"} />
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
          <div className={styles.ingredients__body} onScroll={ingredientsScroll} ref={ingredientsBoxRef}>
            <div className={styles.ingredients__group} ref={bunBoxRef}>
              <h2 className="text text_type_main-medium">Булки</h2>
              <ul className={styles.ingredients__list}>
                {bunItems.map((item) => (
                  <BurgerIngredientCard ingredient={item} key={item._id} openModal={openModal} />
                ))}
              </ul>
            </div>
            <div className={styles.ingredients__group} ref={sauceBoxRef}>
              <h2 className="text text_type_main-medium">Соусы</h2>
              <ul className={styles.ingredients__list}>
                {sauceItems.map((item) => (
                  <BurgerIngredientCard ingredient={item} key={item._id} openModal={openModal} />
                ))}
              </ul>
            </div>
            <div className={styles.ingredients__group} ref={mainBoxRef}>
              <h2 className="text text_type_main-medium">Начинки</h2>
              <ul className={styles.ingredients__list}>
                {mainItems.map((item) => (
                  <BurgerIngredientCard ingredient={item} key={item._id} openModal={openModal} />
                ))}
              </ul>
            </div>
          </div>

          {isModalOpen && (
            <Modal title={"Детали ингредиента"} closeModal={closeModal}>
              <IngredientDetails currentIngredient={ingredient} />
            </Modal>
          )}
        </section>
      )}
    </>
  );
});
