import { NavLink, Link } from "react-router-dom";
import styles from "./sitebar.module.scss";
import { logout } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";

export const SiteBar = () => {
  const dispatch = useDispatch();
  const { refreshToken }: any = useSelector((store: any) => store.auth);

  const handleLogout = (e: React.SyntheticEvent) => {
    e.preventDefault();

    //@ts-ignore: next sprint
    dispatch(logout(refreshToken));
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
      <p className={"text text_type_main-default text_color_inactive"}>
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </nav>
  );
};
