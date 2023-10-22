import styles from "./app.module.scss";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useEffect, useState } from "react";
import Loader from "../loader/loader";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const apiURL = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    fetch(apiURL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((result) => {
        setIsLoaded(true);
        setIngredients(result.data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
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
                <BurgerConstructor data={ingredients} />
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
