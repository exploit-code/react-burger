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
import { IngredientPage } from "../../pages/ingredient/ingredient";

const App = () => {
  const { accessToken } = useSelector((store) => store.auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<ProtectedRouteElement element={<LoginPage />} isAuthenticated={!accessToken} path={"/profile"} />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="/ingredients/:id" element={<IngredientPage />} />
          <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} isAuthenticated={accessToken} path={"/login"} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
