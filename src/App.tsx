import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from './pages/registerPage';
import { LoginPage } from './pages/loginPage';
import { ForgotPage } from './pages/forgotPasswordPage';
import { ResetPage } from './pages/resetPasswordPage';

function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
