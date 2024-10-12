import { Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

import GhostButton from '../../elements/buttons/ghostButton';

interface NavigationItemProps {
  onLogout?: () => void;
  icon: ReactNode;
  text: string;
}

function NavigationItem({ icon, text, onLogout }: NavigationItemProps) {
  const fontColor = useColorModeValue('day.text', 'night.text');
  return (
    <GhostButton onClick={onLogout}>
      <Flex
        gap={'10px'}
        alignItems={'center'}
        fontSize={'3xl'}
        color={fontColor}
      >
        {icon}
        <Text
          fontSize={'sm'}
          as={'h1'}
          fontWeight={'600'}
          display={'flex'}
          alignItems={'center'}
          color={fontColor}
        >
          {text}
        </Text>
      </Flex>
    </GhostButton>
  );
}

export default NavigationItem;
