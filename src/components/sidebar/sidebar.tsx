import { NavLink, Link } from "react-router-dom";
import styles from "./sitebar.module.scss";
import { logoutThunk } from "../../services/thunk/auth";
import { useDispatch } from "../../services/hooks";

export const SiteBar = () => {
  const dispatch = useDispatch();

  const handleLogout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutThunk());
  };

  return (
    <nav className={styles.sitebar}>
      <ul className={styles.sitebar__list}>
        <li>
          <NavLink className={styles.sitebar__link} to={"/profile"} end>
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "text text_type_main-medium"
                    : "text text_type_main-medium text_color_inactive"
                }
              >
                Профиль
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.sitebar__link} to={"/profile/orders"} end>
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "text text_type_main-medium"
                    : "text text_type_main-medium text_color_inactive"
                }
              >
                История заказов
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <Link className={styles.sitebar__link} onClick={(e) => handleLogout(e)} to={"/login"}>
            <span className="text text_type_main-medium text_color_inactive">Выход</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
