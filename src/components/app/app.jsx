import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "../../pages/main/main";
import { LoginPage } from "../../pages/login/login";
import { RegisterPage } from "../../pages/register/register";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { ResetPasswordPage } from "../../pages/reset-password/reset-password";
import { ProfilePage } from "../../pages/profile/profile";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { useSelector } from "react-redux";
import { ProtectedRouteElement } from "../protected-route-element/protected-route-element";
import { AuthLayout } from "../../pages/auth-layout/auth-layout";
import { ProfileOrdersPage } from "../../pages/profile-orders/profile-orders";
import AppHeader from "../app-header/app-header";

const App = () => {
  const { accessToken, reset } = useSelector((store) => store.auth);

  return (
    <Router>
      <>
        <AppHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<AuthLayout />}>
            <Route path="login" element={<ProtectedRouteElement element={<LoginPage />} property={!accessToken} path={"/"} />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="reset-password" element={<ProtectedRouteElement element={<ResetPasswordPage />} property={reset} path={"/forgot-password"} />} />
            <Route path="register" element={<RegisterPage />} />
            {/* <Route path="/ingredients/:id" element={<IngredientPage />} /> */}
            <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} property={accessToken} path={"/login"} />} />
            <Route path="/profile/orders" element={<ProtectedRouteElement element={<ProfileOrdersPage />} property={accessToken} path={"/login"} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
};

export default App;
