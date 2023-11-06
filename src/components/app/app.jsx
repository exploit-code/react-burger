import styles from "./app.module.scss";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const App = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <>
          <div className={styles.main__section}>
            <BurgerIngredients />
          </div>
          <div className={styles.main__section}>
            {/* <BurgerConstructor /> */}
          </div>
        </>
      </main>
    </>
  );
};

export default App;
