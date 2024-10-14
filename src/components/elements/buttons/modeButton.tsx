import { useColorMode } from '@chakra-ui/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import GhostButton from './ghostButton';

export function ModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { textColor } = useCustomColorModeValues();

  return (
    <>
      <GhostButton onClick={toggleColorMode} fontSize="2xl" color={textColor}>
        {colorMode === 'light' ? <MdLightMode /> : <MdDarkMode />}
      </GhostButton>
    </>
  );
}
