import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ColorModeProvider } from './hooks/colorModeContext.tsx';
import store from './redux/store.ts';
import './styles/index.css';
import { circleTheme } from './themes/theme.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={circleTheme}>
        <ColorModeProvider>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <ColorModeScript
                initialColorMode={theme.config.initialColorMode}
              />
              <App />
            </QueryClientProvider>
          </BrowserRouter>
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
