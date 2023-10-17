import styles from "./app.module.scss";
import AppHeader from "../app-header/app-header";
import cn from "classnames";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import data from "../../utils/data";

const App = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <div className={styles.main__section}>
          <BurgerIngredients data={data} />
        </div>
        <div className={cn(styles.main__section, "pt-25")}>BurgerConstructor</div>
      </main>
    </>
  );
};

export default App;
