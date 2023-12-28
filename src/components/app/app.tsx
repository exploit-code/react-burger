import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { MainPage } from "../../pages/main/main";
import { LoginPage } from "../../pages/login/login";
import { RegisterPage } from "../../pages/register/register";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { ResetPasswordPage } from "../../pages/reset-password/reset-password";
import { ProfilePage } from "../../pages/profile/profile";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { ProtectedRouteElement } from "../protected-route-element/protected-route-element";
import { Layout } from "../../pages/layout/layout";
import { ProfileOrdersPage } from "../../pages/profile-orders/profile-orders";
import { AppHeader } from "../app-header/app-header";
import { IngredientPage } from "../../pages/ingredient/ingredient";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";
import { FeedPage } from "../../pages/feed/feed";
import { OrderInfo } from "../order-info/order-info";
import { OrderInfoPage } from "../../pages/order-info/order-info";
import { useDispatch, useSelector } from "../../services/hooks";
import { getIngredientsThunk } from "../../services/middleware/burger-ingredients";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  let background = location.state && location.state.background;
  const closeModal = () => navigate(-1);
  const { order } = useSelector((store) => store.currentOrder);

  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="login"
            element={<ProtectedRouteElement children={<LoginPage />} anonymous={true} />}
          />
          <Route
            path="forgot-password"
            element={<ProtectedRouteElement children={<ForgotPasswordPage />} anonymous={true} />}
          />
          <Route
            path="reset-password"
            element={<ProtectedRouteElement children={<ResetPasswordPage />} anonymous={true} />}
          />
          <Route
            path="register"
            element={<ProtectedRouteElement children={<RegisterPage />} anonymous={true} />}
          />
          <Route path="/ingredients/:id" element={<IngredientPage />} />
          <Route
            path="profile"
            element={<ProtectedRouteElement children={<ProfilePage />} anonymous={false} />}
          />
          <Route
            path="profile/orders"
            element={<ProtectedRouteElement children={<ProfileOrdersPage />} anonymous={false} />}
          />
          <Route
            path="profile/orders/:number"
            element={<ProtectedRouteElement children={<OrderInfoPage />} anonymous={false} />}
          />
          <Route path="feed" element={<FeedPage />} />
          <Route path="feed/:number" element={<OrderInfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal title={"Детали ингредиента"} closeModal={closeModal}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path="/feed/:number"
            element={
              <Modal title={`#${order?.number}`} closeModal={closeModal}>
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:number"
            element={
              <Modal title={`#${order?.number}`} closeModal={closeModal}>
                <OrderInfo />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};
