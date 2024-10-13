import { Flex, Spacer, useColorModeValue } from '@chakra-ui/react';
import { useCallback, useEffect, useRef } from 'react';
import { BiHeart, BiLogOut, BiSolidHome, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SolidButton from '../../elements/buttons/solidButton';
import NavigationItem from '../navigations/navigationItem';

export function NavigationMobile({
  showNavigationMobile,
  onCloseNavigationMobile,
}: {
  showNavigationMobile: boolean;
  onCloseNavigationMobile: () => void;
}) {
  const bgColor = useColorModeValue('day.baseDarker', 'night.baseDarker');
  const menuRef = useRef<HTMLDivElement | null>(null);

  async function onLogout() {
    return;
  }

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onCloseNavigationMobile();
      }
    },
    [onCloseNavigationMobile]
  );

  useEffect(() => {
    if (showNavigationMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNavigationMobile, handleClickOutside]);

  const leftNavigation = showNavigationMobile ? '0px' : '-100vh';

  return (
    <>
      <Flex
        ref={menuRef}
        display={{ base: 'flex', xl: 'none' }}
        backgroundColor={bgColor}
        as={'nav'}
        direction={'column'}
        gap={'1rem'}
        pos={'fixed'}
        top={'24'}
        width={{ base: '80%', sm: '60%', md: '50%', lg: '40%' }}
        height={'80vh'}
        zIndex={10}
        padding={'3rem'}
        borderRadius={'2xl'}
        left={leftNavigation}
        transition={'100ms'}
      >
        <Link to={'/'}>
          <NavigationItem icon={<BiSolidHome />} text={'Home'} />
        </Link>

        <Link to={'/follows'}>
          <NavigationItem icon={<BiHeart />} text={'Follows'} />
        </Link>
        <Link to={'/me'}>
          <NavigationItem icon={<BiUser />} text={'Me'} />
        </Link>

        <SolidButton text="Create Post"></SolidButton>
        <Spacer />
        <Flex gap={'1rem'}>
          <NavigationItem
            icon={<BiLogOut />}
            text={'Logout'}
            onLogout={onLogout}
          />
        </Flex>
      </Flex>
    </>
  );
}
