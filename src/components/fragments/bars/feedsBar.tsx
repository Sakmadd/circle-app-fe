import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface MainBarProps {
  children: ReactNode;
}

export function FeedsBar({ children }: MainBarProps) {
  return (
    <Box
      as={'section'}
      border={'2px'}
      borderColor={'circle.darker'}
      minHeight={'500vh'}
    >
      {children}
    </Box>
  );
}
