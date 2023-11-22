import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "../../pages/main/main";
import { LoginPage } from "../../pages/login/login";
import { RegisterPage } from "../../pages/register/register";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { ResetPasswordPage } from "../../pages/reset-password/reset-password";
import { ProfilePage } from "../../pages/profile/profile";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { ProtectedRouteElement } from "../protected-route-element/protected-route-element";
import { AuthLayout } from "../../pages/auth-layout/auth-layout";
import { ProfileOrdersPage } from "../../pages/profile-orders/profile-orders";
import { AppHeader } from "../app-header/app-header";

const App = () => {
  return (
    <Router>
      <>
        <AppHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<AuthLayout />}>
            <Route path="login" element={<ProtectedRouteElement children={<LoginPage />} anonymous={true} />} />
            <Route path="forgot-password" element={<ProtectedRouteElement children={<ForgotPasswordPage />} anonymous={true} />} />
            <Route path="reset-password" element={<ProtectedRouteElement children={<ResetPasswordPage />} anonymous={true} />} />
            <Route path="register" element={<ProtectedRouteElement children={<RegisterPage />} anonymous={true} />} />
            {/* <Route path="/ingredients/:id" element={<IngredientPage />} /> */}
            <Route path="profile" element={<ProtectedRouteElement children={<ProfilePage />} anonymous={false} />} />
            <Route path="profile/orders" element={<ProtectedRouteElement children={<ProfileOrdersPage />} anonymous={false} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
};

export default App;
