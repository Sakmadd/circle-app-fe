import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface SideBarProps {
  children: ReactNode;
}

export function SideBar({ children }: SideBarProps): JSX.Element {
  return (
    <Box as="aside" pos={'sticky'} top={0} py={'2rem'}>
      {children}
    </Box>
  );
}
