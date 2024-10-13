import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ModeButton } from '../../elements/buttons/modeButton';
import { ProfileButton } from '../../elements/buttons/profileButton';

export function TopBar({
  toggleMenu,
  togglePreferences,
}: {
  toggleMenu: () => void;
  togglePreferences: () => void;
}) {
  const bgColor = useColorModeValue('day.base', 'night.base');
  const borderColor = useColorModeValue('day.baseDarker', 'night.baseDarker');
  const fontColor = useColorModeValue('day.text', 'night.text');

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
              fontSize={'2xl'}
              paddingRight={'10px'}
            >
              <RxHamburgerMenu onClick={toggleMenu} />
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
          <InputGroup maxWidth={'500px'} margin={'auto'}>
            <InputLeftElement pointerEvents="none">
              <FiSearch color={bgColor} />
            </InputLeftElement>
            <Input
              fontSize={{ base: '10px', md: '14px' }}
              type="tel"
              placeholder="Search"
              focusBorderColor="accent.base"
            />
          </InputGroup>
          <Flex gap={'10px'}>
            <Box
              display={{ base: 'block', lg: 'none' }}
              margin={'auto'}
              onClick={togglePreferences}
            >
              <ProfileButton />
            </Box>
            <ModeButton />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
