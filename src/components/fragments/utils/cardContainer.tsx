import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

interface BrandCardProps {
  children: ReactNode;
}

export function CardContainer({ children }: BrandCardProps) {
  const { borderLineColor, baseColor, textColor } = useCustomColorModeValues();

  return (
    <Flex
      flexDirection={'column'}
      border={'2px'}
      borderColor={borderLineColor}
      backgroundColor={baseColor}
      borderRadius={'10px'}
      padding={'5%'}
      color={textColor}
    >
      {' '}
      {children}
    </Flex>
  );
}
