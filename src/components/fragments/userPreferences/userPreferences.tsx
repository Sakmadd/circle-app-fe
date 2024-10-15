import { Flex } from '@chakra-ui/react';
import { DevCard } from '../devCards/devCard';
import ProfileCard from '../profiles/profileCard';
import { SuggestionCard } from '../suggestions/suggestionCard';
import { useLocation } from 'react-router-dom';

export function UserPreferences() {
  const location = useLocation();
  return (
    <>
      <Flex
        direction={'column'}
        gap={'1rem'}
        pos={'fixed'}
        padding={'1rem'}
        width={{ lg: '36%', xl: '24%' }}
      >
        {location.pathname !== '/self' && <ProfileCard />}
        <SuggestionCard />
        <DevCard />
      </Flex>
    </>
  );
}
