import { extendTheme } from '@chakra-ui/react';
const breakpoints = {
  base: '0px',
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};
export const circleTheme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'PlusJakartaSans', sans-serif`,
    body: `'PlusJakartaSans', sans-serif`,
  },
  colors: {
    circle: {
      backdrop: '#171717',
      backdropAccent: '#1c1c1c',
      font: '#939185',
      dark: '#505050',
      darker: '#F4F6FF',
      red: '#D71913',
      accent: '#14AE5C',
      darkAccent: '#12A054',
      error: '#cc0000',
      green: '#006e45',
    },
  },
  styles: {
    global: {
      body: {
        color: '#10375C',
        bg: 'white',
        fontSize: '25.5px',
      },
    },
  },
});

export default circleTheme;
