import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import { circleTheme } from './themes/theme.ts';
import './styles/index.css';
import { ColorModeProvider } from './hooks/colorModeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={circleTheme}>
      <ColorModeProvider>
        <BrowserRouter>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </BrowserRouter>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
);
