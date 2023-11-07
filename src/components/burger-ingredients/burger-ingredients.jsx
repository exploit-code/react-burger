import styles from "./burger-ingredients.module.scss";
import { useState, useRef, useMemo, useEffect } from "react";
import cn from "classnames";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientCard from "../burger-ingredient-card/burger-ingredient-card";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { useModal } from "../../hooks/useModal";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/loader";
import { CLEAR_CURRENT_INGREDIENT } from "../../services/actions/ingredient-details";

import { getIngredients } from "../../services/actions/burger-ingredients";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ingredients.loading);
  const isError = useSelector((store) => store.ingredients.error);
  const ingredients = useSelector((store) => store.ingredients.data);
  const currentIngredient = useSelector((store) => store.currentIngredient.ingredient);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { isModalOpen, openModal, closeModal } = useModal();

  const bunItems = useMemo(() => ingredients.filter((filterItem) => filterItem.type === "bun"), [ingredients]);
  const sauceItems = useMemo(() => ingredients.filter((filterItem) => filterItem.type === "sauce"), [ingredients]);
  const mainItems = useMemo(() => ingredients.filter((filterItem) => filterItem.type === "main"), [ingredients]);

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

  useEffect(() => {
    if (!isModalOpen && currentIngredient !== null) dispatch({ type: CLEAR_CURRENT_INGREDIENT, payload: null });
  }, [isModalOpen, currentIngredient, dispatch]);

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

  return (
    <>
      {isLoading || isError ? (
        <Loader text={isLoading ? "loading" : "error"} />
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
                  <BurgerIngredientCard ingredient={item} openModal={openModal} key={item._id} />
                ))}
              </ul>
            </div>
            <div className={styles.ingredients__group} ref={sauceBoxRef}>
              <h2 className="text text_type_main-medium">Соусы</h2>
              <ul className={styles.ingredients__list}>
                {sauceItems.map((item) => (
                  <BurgerIngredientCard ingredient={item} openModal={openModal} key={item._id} />
                ))}
              </ul>
            </div>
            <div className={styles.ingredients__group} ref={mainBoxRef}>
              <h2 className="text text_type_main-medium">Начинки</h2>
              <ul className={styles.ingredients__list}>
                {mainItems.map((item) => (
                  <BurgerIngredientCard ingredient={item} openModal={openModal} key={item._id} />
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
      )}
    </>
  );
};

export default memo(BurgerIngredients);
