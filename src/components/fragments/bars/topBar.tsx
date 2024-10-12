import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import HollowButton from '../../elements/buttons/hollowButton';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export function TopBar() {
  const bgColor = useColorModeValue('day.base', 'night.base');
  const borderColor = useColorModeValue('day.baseDarker', 'night.baseDarker');
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        borderBottom={'2px'}
        borderColor={borderColor}
        bg={bgColor}
        position={'sticky'}
        top={0}
      >
        <Flex justifyContent="space-between" padding={'10px'} paddingX={'20px'}>
          <Image src="/src/assets/circle-text.svg"></Image>
          <InputGroup maxWidth={'500px'}>
            <InputLeftElement pointerEvents="none">
              <FiSearch color={bgColor} />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Search"
              focusBorderColor="accent.base"
            />
          </InputGroup>
          <HollowButton onClick={toggleColorMode}>
            {colorMode === 'light' ? <MdLightMode /> : <MdDarkMode />}
          </HollowButton>
        </Flex>
      </Box>
    </>
  );
}
