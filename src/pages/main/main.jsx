import styles from "./main.module.scss";
import { BurgerIngredients } from "../../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../../components/burger-constructor/burger-constructor";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export const MainPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <section className={styles.main_page}>
        <BurgerIngredients />
        <BurgerConstructor />
      </section>
    </DndProvider>
  );
};
