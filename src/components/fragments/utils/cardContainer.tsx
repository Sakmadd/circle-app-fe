import { Flex, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BrandCardProps {
  children: ReactNode;
}

export function CardContainer({ children }: BrandCardProps) {
  const borderBaseDarker = useColorModeValue('day.baseDarker', 'transparent');
  const bgBaseDarker = useColorModeValue('transparent', 'night.baseDarker');
  const fontColor = useColorModeValue('day.text', 'night.text');
  const border = useColorModeValue('2px', '0px');
  return (
    <Flex
      flexDirection={'column'}
      border={border}
      borderColor={borderBaseDarker}
      backgroundColor={bgBaseDarker}
      borderRadius={'10px'}
      padding={'5%'}
      color={fontColor}
    >
      {' '}
      {children}
    </Flex>
  );
}
