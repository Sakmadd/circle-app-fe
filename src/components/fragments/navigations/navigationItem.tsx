import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import GhostButton from '../../elements/buttons/ghostButton';

interface NavigationItemProps {
  onLogout?: () => void;
  icon: ReactNode;
  text: string;
}

function NavigationItem({ icon, text, onLogout }: NavigationItemProps) {
  const { textColor } = useCustomColorModeValues();
  return (
    <GhostButton onClick={onLogout}>
      <Flex
        gap={'10px'}
        alignItems={'center'}
        fontSize={'3xl'}
        color={textColor}
      >
        {icon}
        <Text
          fontSize={'sm'}
          as={'h1'}
          fontWeight={'600'}
          display={'flex'}
          alignItems={'center'}
          color={textColor}
        >
          {text}
        </Text>
      </Flex>
    </GhostButton>
  );
}

export default NavigationItem;
