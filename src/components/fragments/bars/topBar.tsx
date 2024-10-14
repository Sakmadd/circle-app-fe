import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { ModeButton } from '../../elements/buttons/modeButton';
import { ProfileButton } from '../../elements/buttons/profileButton';
import { NavigationMobile } from '../mobile/navigationMobile';
import { UserPreferencesMobile } from '../mobile/userPreferencesMobile';

export function TopBar() {
  const { baseColor, textColor, borderLineColor } = useCustomColorModeValues();

  const {
    isOpen: isNavOpen,
    onOpen: onNavOpen,
    onClose: onNavClose,
  } = useDisclosure();
  const {
    isOpen: isPrefOpen,
    onOpen: onPrefOpen,
    onClose: onPrefClose,
  } = useDisclosure();

  return (
    <>
      <Box
        borderBottom={'2px'}
        borderColor={borderLineColor}
        bg={baseColor}
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
              color={textColor}
              margin={'auto'}
              fontSize={'2xl'}
              paddingRight={'10px'}
            >
              <RxHamburgerMenu onClick={onNavOpen} />
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
              <FiSearch color={baseColor} />
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
              onClick={onPrefOpen}
            >
              <ProfileButton />
            </Box>
            <ModeButton />
          </Flex>
        </Flex>
      </Box>
      <NavigationMobile isOpen={isNavOpen} onClose={onNavClose} />
      <UserPreferencesMobile isOpen={isPrefOpen} onClose={onPrefClose} />
    </>
  );
}
