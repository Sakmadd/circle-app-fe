import { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

function ColorModeHandler({ isLogin }: { isLogin: boolean }): null {
  const { colorMode, setColorMode } = useColorMode();
  const location = useLocation();

  useEffect(() => {
    if (!isLogin) {
      if (colorMode !== 'light') {
        setColorMode('light');
      }
    } else {
      const darkModeRoutes = ['/dark-page', '/another-dark-page'];
      if (darkModeRoutes.includes(location.pathname)) {
        if (colorMode !== 'dark') {
          setColorMode('dark');
        }
      } else {
        if (colorMode !== 'light') {
          setColorMode('light');
        }
      }
    }
  }, [isLogin, location, colorMode, setColorMode]);

  return null;
}

export default ColorModeHandler;
