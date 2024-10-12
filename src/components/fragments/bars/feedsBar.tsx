import { Box, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface MainBarProps {
  children: ReactNode;
}

export function FeedsBar({ children }: MainBarProps) {
  const borderColor = useColorModeValue('day.baseDarker', 'night.baseDarker');
  return (
    <Box
      as={'section'}
      border={'2px'}
      borderTop={'0px'}
      borderColor={borderColor}
      minHeight={'500vh'}
      width={'full'}
    >
      {children}
    </Box>
  );
}
