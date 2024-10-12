import { Route, Routes } from 'react-router-dom';
import { ForgotPage } from './components/pages/forgotPasswordPage';
import HomePage from './components/pages/homePage';
import { LoginPage } from './components/pages/loginPage';
import { RegisterPage } from './components/pages/registerPage';
import { ResetPage } from './components/pages/resetPasswordPage';
import { CircleLayout } from './layouts/circleLayout';
const loggedUser = true;

function App() {
  if (!loggedUser) {
    return (
      <div className="app">
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/help/forgot" element={<ForgotPage />} />
          <Route path="/help/reset" element={<ResetPage />} />
        </Routes>
      </div>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<CircleLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
