import styles from "./app.module.scss";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import data from "../../utils/data";

const App = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <div className={styles.main__section}>
          <BurgerIngredients data={data} />
        </div>
        <div className={styles.main__section}>
          <BurgerConstructor data={data} />
        </div>
      </main>
    </>
  );
};

export default App;
