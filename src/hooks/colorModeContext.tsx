import { useColorModeValue } from '@chakra-ui/react';
import React, { createContext } from 'react';

interface ColorModeValues {
  baseColor: string;
  baseDarkerColor: string;
  accentTextColor: string;
  textColor: string;
  borderLineColor: string;
}

export const ColorModeContext = createContext<ColorModeValues | undefined>(
  undefined
);
export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const baseColor = useColorModeValue('day.base', 'night.base');
  const baseDarkerColor = useColorModeValue(
    'day.baseDarker',
    'night.baseDarker'
  );
  const textColor = useColorModeValue('day.text', 'night.text');
  const accentTextColor = useColorModeValue('accent.text', 'night.text');
  const borderLineColor = useColorModeValue(
    'day.borderLineColor',
    'night.borderLineColor'
  );

  return (
    <ColorModeContext.Provider
      value={{
        baseColor,
        baseDarkerColor,
        textColor,
        borderLineColor,
        accentTextColor,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
