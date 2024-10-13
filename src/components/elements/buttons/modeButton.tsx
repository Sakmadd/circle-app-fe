import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import GhostButton from './ghostButton';

export function ModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const fontColor = useColorModeValue('day.text', 'night.text');

  return (
    <>
      <GhostButton onClick={toggleColorMode} fontSize="2xl" color={fontColor}>
        {colorMode === 'light' ? <MdLightMode /> : <MdDarkMode />}
      </GhostButton>
    </>
  );
}
