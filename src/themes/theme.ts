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
      text: '#fff',
    },
    day: {
      base: '#fff',
      baseDarker: '#F5F5F2',
      text: '#525131',
      textLight: '#939185',
      borderLineColor: '#F5F5F2',
    },
    night: {
      base: '#262626 ',
      baseDarker: '#1d1d1d',
      text: '#fff',
      textLight: '#939185',
      borderLineColor: '#363535',
    },
  },
});

export default circleTheme;
