import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from './components/pages/registerPage';
import { LoginPage } from './components/pages/loginPage';
import { ForgotPage } from './components/pages/forgotPasswordPage';
import { ResetPage } from './components/pages/resetPasswordPage';
import { CircleLayout } from './layouts/circleLayout';
import HomePage from './components/pages/homePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CircleLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot" element={<ForgotPage />} />
          <Route path="reset" element={<ResetPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
        <Route element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
