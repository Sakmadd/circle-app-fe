import { useContext } from 'react';
import { ColorModeContext } from './colorModeContext';

export const useCustomColorModeValues = () => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error(
      'useColorModeValues must be used within a ColorModeProvider'
    );
  }
  return context;
};
