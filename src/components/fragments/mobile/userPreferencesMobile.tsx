import { Flex, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useRef, useCallback } from 'react';
import ProfileCard from '../profiles/profileCard';

export function UserPreferencesMobile({
  showPreferencesMobile,
  onClosePreferencesMobile,
}: {
  showPreferencesMobile: boolean;
  onClosePreferencesMobile: () => void;
}) {
  const bgColor = useColorModeValue('day.baseDarker', 'night.baseDarker');
  const menuRef = useRef<HTMLDivElement | null>(null);
  const leftPreferences = showPreferencesMobile ? '0px' : '-100vh';

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClosePreferencesMobile();
      }
    },
    [onClosePreferencesMobile]
  );

  useEffect(() => {
    if (showPreferencesMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPreferencesMobile, handleClickOutside]);

  return (
    <Flex
      ref={menuRef}
      display={{ base: 'flex', lg: 'none' }}
      backgroundColor={bgColor}
      as={'nav'}
      direction={'column'}
      gap={'1rem'}
      pos={'fixed'}
      top={'24'}
      width={{ base: '80%', sm: '60%', md: '50%', lg: '40%' }}
      zIndex={10}
      borderRadius={'2xl'}
      right={leftPreferences}
      transition={'100ms'}
    >
      <ProfileCard />
    </Flex>
  );
}
