import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface SideBarProps {
  children: ReactNode;
}

export function SideBar({ children }: SideBarProps): JSX.Element {
  return (
    <Flex
      as="aside"
      pos={'sticky'}
      top={0}
      paddingY={'2rem'}
      gap={'1rem'}
      flexDirection={'column'}
    >
      {children}
    </Flex>
  );
}
