import styles from "./app.module.scss";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useEffect, useState } from "react";
import Loader from "../loader/loader";
import { IngredientsContext } from "../../context/ingredientsContext";
import { getIngredients } from "../../utils/burger-api";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients()
      .then(setIngredients)
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        {isLoaded ? (
          error ? (
            <Loader text="Произошла ошибка при получении данных" />
          ) : (
            <>
              <div className={styles.main__section}>
                <BurgerIngredients data={ingredients} />
              </div>
              <div className={styles.main__section}>
                <IngredientsContext.Provider value={ingredients}>
                  <BurgerConstructor />
                </IngredientsContext.Provider>
              </div>
            </>
          )
        ) : (
          <Loader text="Загрузка данных" />
        )}
      </main>
    </>
  );
};

export default App;
