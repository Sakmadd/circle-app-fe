import { Flex, useColorModeValue } from '@chakra-ui/react';
import { useRef } from 'react';
import ProfileCard from '../profiles/profileCard';

export function UserPreferencesMobile({
  showPreferencesMobile,
}: {
  showPreferencesMobile: boolean;
}) {
  const bgColor = useColorModeValue('day.baseDarker', 'night.baseDarker');
  const menuRef = useRef<HTMLDivElement | null>(null);
  const leftPreferences = showPreferencesMobile ? '0px' : '-100vh';

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
