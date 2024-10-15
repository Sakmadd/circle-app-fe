import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ForgotPage } from './components/pages/forgotPasswordPage';
import HomePage from './components/pages/homePage';
import { LoginPage } from './components/pages/loginPage';
import { PreLoadPage } from './components/pages/preLoadPage';
import { RegisterPage } from './components/pages/registerPage';
import { ResetPage } from './components/pages/resetPasswordPage';
import { SelfProfilePage } from './components/pages/selfProfilePage';
import { SomeoneProfilePage } from './components/pages/someoneProfilePage';
import { dummyUser } from './data/dummy';
import { CircleLayout } from './layouts/circleLayout';
import { setLoggedUser } from './redux/slices/authSlice';
import { setPreloaded } from './redux/slices/preLoadedSlice';
import { RootState } from './redux/store';
import ColorModeHandler from './themes/colorMode';
import { FeedDetailPage } from './components/pages/feedDetailPage';

export const isLogin = true;

function App() {
  const dispatch = useDispatch();
  const isPreloaded = useSelector(
    (state: RootState) => state.isPreloaded.value
  );

  useEffect(() => {
    async function initializeApp() {
      dispatch(setLoggedUser(dummyUser));
      dispatch(setPreloaded(false));

      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(setPreloaded(true));
    }

    initializeApp();
  }, [dispatch]);

  if (!isPreloaded) {
    return (
      <>
        <ColorModeHandler isLogin={isLogin} />
        <div className="app">
          <PreLoadPage />
        </div>
      </>
    );
  }

  if (!isLogin) {
    return (
      <>
        <ColorModeHandler isLogin={isLogin} />
        <div className="app">
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/help/forgot" element={<ForgotPage />} />
            <Route path="/help/reset" element={<ResetPage />} />
          </Routes>
        </div>
      </>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<CircleLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/self" element={<SelfProfilePage />} />
          <Route path="/user/:id" element={<SomeoneProfilePage />} />
          <Route path="/feed/:id" element={<FeedDetailPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
