import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { FeedDetailPage } from './components/pages/feedDetailPage';
import FollowsPage from './components/pages/followPages';
import { ForgotPage } from './components/pages/forgotPasswordPage';
import HomePage from './components/pages/homePage';
import { LoginPage } from './components/pages/loginPage';
import { PreLoadPage } from './components/pages/preLoadPage';
import { RegisterPage } from './components/pages/registerPage';
import { ResetPage } from './components/pages/resetPasswordPage';
import { SelfProfilePage } from './components/pages/selfProfilePage';
import { SomeoneProfilePage } from './components/pages/someoneProfilePage';
import { CircleLayout } from './layouts/circleLayout';
import api from './networks/api';
import { setLoggedUser, unsetLoggedUser } from './redux/slices/authSlice';
import { setPreloaded } from './redux/slices/preLoadedSlice';
import { RootState } from './redux/store';
import ColorModeHandler from './themes/colorMode';
import { UserType } from './types/types';

function App() {
  const dispatch = useDispatch();
  const isPreloaded = useSelector(
    (state: RootState) => state.isPreloaded.value
  );
  const loggedUser = useSelector((state: RootState) => state.loggedUser.value);

  useEffect(() => {
    async function initializeApp() {
      try {
        const loggedUser: UserType = await api.GET_LOGGED_USER();
        dispatch(setLoggedUser(loggedUser));
      } catch {
        dispatch(unsetLoggedUser());
      } finally {
        dispatch(setPreloaded(false));
      }
    }

    initializeApp();
  }, [dispatch]);

  if (isPreloaded) {
    return (
      <>
        <ColorModeHandler isLogin={!!loggedUser} />
        <div className="app">
          <PreLoadPage />
        </div>
      </>
    );
  }

  if (!loggedUser) {
    return (
      <>
        <ColorModeHandler isLogin={!!loggedUser} />
        <div className="app">
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/help/forgot" element={<ForgotPage />} />
            <Route path="/help/reset/:token" element={<ResetPage />} />
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
          <Route path="/feed/:id" element={<FeedDetailPage />} />
          <Route path="/user/:id" element={<SomeoneProfilePage />} />
          <Route path="/self" element={<SelfProfilePage />} />
          <Route path="/follows" element={<FollowsPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
