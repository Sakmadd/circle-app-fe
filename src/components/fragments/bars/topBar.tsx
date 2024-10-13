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
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import HollowButton from '../../elements/buttons/hollowButton';

export function TopBar() {
  const bgColor = useColorModeValue('day.base', 'night.base');
  const borderColor = useColorModeValue('day.baseDarker', 'night.baseDarker');
  const { colorMode, toggleColorMode } = useColorMode();
  const fontColor = useColorModeValue('day.text', 'night.text');
  function toggleMenu() {
    alert('toggle menu');
  }

  return (
    <>
      <Box
        borderBottom={'2px'}
        borderColor={borderColor}
        bg={bgColor}
        position={'sticky'}
        top={0}
        zIndex={10}
      >
        <Flex
          justifyContent="space-between"
          padding={'10px'}
          paddingX={'20px'}
          gap={'50px'}
        >
          <Flex flexDirection={'row'}>
            <Box
              display={{ base: 'block', xl: 'none' }}
              paddingTop={{ base: '0px', lg: '5px' }}
              color={fontColor}
              margin={'auto'}
              fontSize={'3xl'}
              paddingRight={'10px'}
            >
              <GiHamburgerMenu onClick={toggleMenu} />
            </Box>
            <Image
              src="/src/assets/circle-logo.svg"
              width={'50px'}
              paddingTop={{ base: '0px', lg: '5px' }}
            ></Image>
            <Image
              src="/src/assets/circle-text.svg"
              display={{ base: 'none', lg: 'block' }}
            ></Image>
          </Flex>
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
