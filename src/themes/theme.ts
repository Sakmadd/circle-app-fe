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
    accent: {
      base: '#F3C623',
    },
    day: {
      base: '#fff',
      baseDarker: '#F5F5F2',
      text: '#939185',
    },
    night: {
      base: '#1d1d1d',
      baseDarker: '#262626',
      line: '#363535',
    },
  },
});

export default circleTheme;

// backdrop: '#F5F5F7',
// backdropAccent: '#1c1c1c',
// font: '#939185',
// dark: '#505050',
// darker: '#F4F6FF',
// red: '#D71913',
// accent: '#F3C623',
// darkAccent: '#12A054',
// error: '#cc0000',
// green: '#006e45',
