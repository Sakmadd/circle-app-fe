import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

interface MainBarProps {
  children: ReactNode;
}

export function MainContent({ children }: MainBarProps) {
  const { borderLineColor } = useCustomColorModeValues();
  return (
    <Box
      as={'section'}
      border={'2px'}
      borderTop={'0px'}
      borderColor={borderLineColor}
      minHeight={'100vh'}
      width={'full'}
    >
      {children}
    </Box>
  );
}
